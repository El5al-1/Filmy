/* ============================================
   El5al Films - Premium Movie Journal
   script.js - Complete Application Logic
   ============================================ */

// ============================================
// DATA LAYER
// ============================================

/**
 * Storage key for LocalStorage
 */
const STORAGE_KEY = 'el5al_films_movies';

/**
 * Available genre list
 */
const GENRES = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime',
  'Documentary', 'Drama', 'Fantasy', 'Horror', 'Musical',
  'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Western', 'Other'
];

/**
 * Load movies from LocalStorage
 * @returns {Array} Array of movie objects
 */
function loadMovies() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading movies:', e);
    return [];
  }
}

/**
 * Save movies to LocalStorage
 * @param {Array} movies - Array of movie objects
 */
function saveMovies(movies) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (e) {
    console.error('Error saving movies:', e);
    showNotification('Failed to save data!', 'error');
  }
}

/**
 * Generate a unique ID
 * @returns {string} Unique identifier
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

// ============================================
// STATE
// ============================================

let movies = loadMovies();
let currentFilter = 'all';
let currentSort = 'newest';
let currentGenre = 'all';
let searchQuery = '';
let editingMovieId = null;

// ============================================
// DOM REFERENCES
// ============================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Elements cached after DOM loads
let elements = {};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  cacheElements();
  populateGenreOptions();
  bindEvents();
  renderAll();
});

/**
 * Cache all frequently accessed DOM elements
 */
function cacheElements() {
  elements = {
    // Stats
    statTotal: $('#stat-total'),
    statWatched: $('#stat-watched'),
    statPlanning: $('#stat-planning'),
    statFavorites: $('#stat-favorites'),
    statRating: $('#stat-rating'),
    // Grid
    moviesGrid: $('#movies-grid'),
    // Search
    searchInput: $('#search-input'),
    // Filters
    filterTabs: $$('.filter-tab'),
    sortSelect: $('#sort-select'),
    genreSelect: $('#genre-filter-select'),
    // Add/Edit Modal
    movieModal: $('#movie-modal'),
    movieForm: $('#movie-form'),
    modalTitle: $('#modal-title'),
    inputTitle: $('#input-title'),
    inputGenre: $('#input-genre'),
    inputYear: $('#input-year'),
    inputRating: $('#input-rating'),
    inputStatus: $('#input-status'),
    inputFavorite: $('#input-favorite'),
    inputNotes: $('#input-notes'),
    ratingNumber: $('#rating-number'),
    errorTitle: $('#error-title'),
    // Detail Modal
    detailModal: $('#detail-modal'),
    // Confirm Modal
    confirmModal: $('#confirm-modal'),
    confirmText: $('#confirm-text'),
    confirmYes: $('#confirm-yes'),
    // Notification container
    notifContainer: $('#notification-container'),
    // Data buttons
    importInput: $('#import-input'),
  };
}

/**
 * Populate genre dropdowns
 */
function populateGenreOptions() {
  // Form genre select
  const genreSelect = elements.inputGenre;
  GENRES.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    genreSelect.appendChild(opt);
  });

  // Filter genre select
  const filterGenre = elements.genreSelect;
  GENRES.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    filterGenre.appendChild(opt);
  });
}

// ============================================
// EVENT BINDING
// ============================================

function bindEvents() {
  // Search
  elements.searchInput.addEventListener('input', debounce((e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderMovies();
  }, 200));

  // Filter tabs
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      elements.filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderMovies();
    });
  });

  // Sort
  elements.sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderMovies();
  });

  // Genre filter
  elements.genreSelect.addEventListener('change', (e) => {
    currentGenre = e.target.value;
    renderMovies();
  });

  // Add Movie button
  $('#btn-add-movie').addEventListener('click', () => openAddModal());

  // Form submit
  elements.movieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSaveMovie();
  });

  // Rating slider
  elements.inputRating.addEventListener('input', (e) => {
    elements.ratingNumber.textContent = e.target.value;
  });

  // Close modal buttons
  $$('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Click outside modal to close
  $$('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // ESC closes any open modal
    if (e.key === 'Escape') {
      closeAllModals();
    }
    // Enter to save movie (when form modal is open and not in textarea)
    if (e.key === 'Enter' && elements.movieModal.classList.contains('open')) {
      if (e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        handleSaveMovie();
      }
    }
  });

  // Export
  $('#btn-export').addEventListener('click', exportMovies);

  // Import
  $('#btn-import').addEventListener('click', () => elements.importInput.click());
  elements.importInput.addEventListener('change', importMovies);

  // Clear all
  $('#btn-clear-all').addEventListener('click', clearAllData);

  // Ripple effect on all buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (btn) createRipple(e, btn);
  });
}

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render everything
 */
function renderAll() {
  renderStats();
  renderMovies();
}

/**
 * Render dashboard statistics
 */
function renderStats() {
  const total = movies.length;
  const watched = movies.filter(m => m.status === 'watched').length;
  const planning = movies.filter(m => m.status === 'planning').length;
  const favorites = movies.filter(m => m.favorite).length;

  const ratedMovies = movies.filter(m => m.rating > 0);
  const avgRating = ratedMovies.length > 0
    ? (ratedMovies.reduce((sum, m) => sum + m.rating, 0) / ratedMovies.length).toFixed(1)
    : '0.0';

  animateNumber(elements.statTotal, total);
  animateNumber(elements.statWatched, watched);
  animateNumber(elements.statPlanning, planning);
  animateNumber(elements.statFavorites, favorites);
  elements.statRating.textContent = avgRating;
}

/**
 * Animate a number from current value to new value
 */
function animateNumber(el, target) {
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;

  const duration = 400;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(current + (target - current) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/**
 * Get filtered and sorted movies
 * @returns {Array} Filtered movie list
 */
function getFilteredMovies() {
  let result = [...movies];

  // Search filter
  if (searchQuery) {
    result = result.filter(m =>
      m.title.toLowerCase().includes(searchQuery) ||
      m.genre.toLowerCase().includes(searchQuery) ||
      (m.notes && m.notes.toLowerCase().includes(searchQuery))
    );
  }

  // Status / favorite filter
  switch (currentFilter) {
    case 'watched':
      result = result.filter(m => m.status === 'watched');
      break;
    case 'planning':
      result = result.filter(m => m.status === 'planning');
      break;
    case 'favorites':
      result = result.filter(m => m.favorite);
      break;
  }

  // Genre filter
  if (currentGenre !== 'all') {
    result = result.filter(m => m.genre === currentGenre);
  }

  // Sort
  switch (currentSort) {
    case 'newest':
      result.sort((a, b) => b.createdAt - a.createdAt);
      break;
    case 'oldest':
      result.sort((a, b) => a.createdAt - b.createdAt);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'alpha':
      result.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  return result;
}

/**
 * Render movie cards into the grid
 */
function renderMovies() {
  const filtered = getFilteredMovies();
  const grid = elements.moviesGrid;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🎬</span>
        <h3 class="empty-title">${movies.length === 0 ? 'No Movies Yet' : 'No Results Found'}</h3>
        <p class="empty-text">${movies.length === 0 ? 'Click "Add Movie" to start building your collection.' : 'Try a different search or filter.'}</p>
        ${movies.length === 0 ? '<button class="btn btn-primary" onclick="openAddModal()">+ Add Your First Movie</button>' : ''}
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((movie, index) => `
    <div class="movie-card" style="animation-delay: ${index * 0.05}s" data-id="${movie.id}">
      <div class="movie-card-header">
        <h3 class="movie-title" onclick="openDetailModal('${movie.id}')">${escapeHtml(movie.title)}</h3>
        <button class="movie-fav-btn ${movie.favorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${movie.id}')" title="${movie.favorite ? 'Remove from favorites' : 'Add to favorites'}">
          ${movie.favorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="movie-meta">
        ${movie.genre ? `<span class="movie-genre">${escapeHtml(movie.genre)}</span>` : ''}
        ${movie.year ? `<span class="movie-year">${movie.year}</span>` : ''}
      </div>

      ${movie.rating > 0 ? `
        <div class="movie-rating">
          <span class="movie-rating-stars">${getStars(movie.rating)}</span>
          <span class="movie-rating-value">${movie.rating}/10</span>
        </div>
      ` : ''}

      <div>
        <span class="movie-status-badge ${movie.status === 'watched' ? 'badge-watched' : 'badge-planning'}">
          ${movie.status === 'watched' ? '✓ Watched' : '◷ Planning'}
        </span>
      </div>

      ${movie.notes ? `<p class="movie-notes-preview">"${escapeHtml(movie.notes)}"</p>` : ''}

      <div class="movie-card-footer">
        <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation(); openEditModal('${movie.id}')">✏️ Edit</button>
        <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation(); confirmDeleteMovie('${movie.id}')">🗑️ Delete</button>
      </div>
    </div>
  `).join('');
}

/**
 * Convert rating (1-10) to star display
 */
function getStars(rating) {
  const full = Math.round(rating / 2);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

// ============================================
// MODAL MANAGEMENT
// ============================================

/**
 * Open Add Movie modal
 */
function openAddModal() {
  editingMovieId = null;
  elements.modalTitle.textContent = '🎬 Add New Movie';
  elements.movieForm.reset();
  elements.ratingNumber.textContent = '5';
  elements.inputRating.value = 5;
  clearFormErrors();
  openModal(elements.movieModal);
  elements.inputTitle.focus();
}

/**
 * Open Edit Movie modal
 */
function openEditModal(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  editingMovieId = id;
  elements.modalTitle.textContent = '✏️ Edit Movie';
  elements.inputTitle.value = movie.title;
  elements.inputGenre.value = movie.genre;
  elements.inputYear.value = movie.year || '';
  elements.inputRating.value = movie.rating;
  elements.ratingNumber.textContent = movie.rating;
  elements.inputStatus.value = movie.status;
  elements.inputFavorite.checked = movie.favorite;
  elements.inputNotes.value = movie.notes || '';
  clearFormErrors();
  openModal(elements.movieModal);
  elements.inputTitle.focus();
}

/**
 * Open Movie Detail modal
 */
function openDetailModal(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  const body = elements.detailModal.querySelector('.modal-body');
  body.innerHTML = `
    <div class="detail-field">
      <div class="detail-title">${escapeHtml(movie.title)}</div>
    </div>

    <div class="detail-badges">
      <span class="movie-status-badge ${movie.status === 'watched' ? 'badge-watched' : 'badge-planning'}">
        ${movie.status === 'watched' ? '✓ Watched' : '◷ Planning'}
      </span>
      ${movie.favorite ? '<span class="movie-status-badge badge-watched">❤️ Favorite</span>' : ''}
    </div>

    <div class="detail-row">
      ${movie.genre ? `
        <div class="detail-field">
          <div class="detail-label">Genre</div>
          <div class="detail-value">${escapeHtml(movie.genre)}</div>
        </div>
      ` : ''}
      ${movie.year ? `
        <div class="detail-field">
          <div class="detail-label">Release Year</div>
          <div class="detail-value">${movie.year}</div>
        </div>
      ` : ''}
    </div>

    ${movie.rating > 0 ? `
      <div class="detail-field">
        <div class="detail-label">Rating</div>
        <div style="display:flex;align-items:center;gap:14px;margin-top:4px;">
          <span class="detail-rating-big">${movie.rating}<span class="detail-rating-max">/10</span></span>
          <span class="detail-stars">${getStars(movie.rating)}</span>
        </div>
      </div>
    ` : ''}

    ${movie.notes ? `
      <div class="detail-field">
        <div class="detail-label">Notes</div>
        <div class="detail-notes">${escapeHtml(movie.notes)}</div>
      </div>
    ` : ''}

    <div class="detail-field">
      <div class="detail-label">Added On</div>
      <div class="detail-value">${new Date(movie.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>

    <div class="detail-actions">
      <button class="btn btn-primary" onclick="closeAllModals(); openEditModal('${movie.id}')">✏️ Edit Movie</button>
      <button class="btn btn-danger" onclick="closeAllModals(); confirmDeleteMovie('${movie.id}')">🗑️ Delete Movie</button>
    </div>
  `;

  openModal(elements.detailModal);
}

/**
 * Open a modal overlay
 */
function openModal(modal) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close all open modals
 */
function closeAllModals() {
  $$('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

// ============================================
// MOVIE CRUD
// ============================================

/**
 * Handle form save (add or edit)
 */
function handleSaveMovie() {
  clearFormErrors();

  const title = elements.inputTitle.value.trim();
  const genre = elements.inputGenre.value;
  const year = elements.inputYear.value ? parseInt(elements.inputYear.value) : null;
  const rating = parseInt(elements.inputRating.value);
  const status = elements.inputStatus.value;
  const favorite = elements.inputFavorite.checked;
  const notes = elements.inputNotes.value.trim();

  // Validation: title required
  if (!title) {
    showFormError('error-title', 'Movie title is required.');
    elements.inputTitle.classList.add('error');
    elements.inputTitle.focus();
    return;
  }

  // Validation: duplicate check
  const duplicate = movies.find(m =>
    m.title.toLowerCase() === title.toLowerCase() && m.id !== editingMovieId
  );
  if (duplicate) {
    showFormError('error-title', 'A movie with this title already exists.');
    elements.inputTitle.classList.add('error');
    elements.inputTitle.focus();
    return;
  }

  if (editingMovieId) {
    // Update existing movie
    const index = movies.findIndex(m => m.id === editingMovieId);
    if (index !== -1) {
      movies[index] = {
        ...movies[index],
        title,
        genre,
        year,
        rating,
        status,
        favorite,
        notes,
        updatedAt: Date.now()
      };
      showNotification(`"${title}" updated successfully!`, 'success');
    }
  } else {
    // Add new movie
    const movie = {
      id: generateId(),
      title,
      genre,
      year,
      rating,
      status,
      favorite,
      notes,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    movies.push(movie);
    showNotification(`"${title}" added to your collection!`, 'success');
  }

  saveMovies(movies);
  closeAllModals();
  renderAll();
}

/**
 * Toggle favorite status for a movie
 */
function toggleFavorite(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;
  movie.favorite = !movie.favorite;
  movie.updatedAt = Date.now();
  saveMovies(movies);
  renderAll();
  showNotification(
    movie.favorite ? `"${movie.title}" added to favorites!` : `"${movie.title}" removed from favorites.`,
    'info'
  );
}

/**
 * Show delete confirmation
 */
function confirmDeleteMovie(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  elements.confirmText.textContent = `Are you sure you want to delete "${movie.title}"? This action cannot be undone.`;

  // Set up the confirm button
  elements.confirmYes.onclick = () => {
    deleteMovie(id);
    closeAllModals();
  };

  openModal(elements.confirmModal);
}

/**
 * Delete a movie by ID
 */
function deleteMovie(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;
  const title = movie.title;
  movies = movies.filter(m => m.id !== id);
  saveMovies(movies);
  renderAll();
  showNotification(`"${title}" has been deleted.`, 'error');
}

// ============================================
// VALIDATION HELPERS
// ============================================

function showFormError(errorId, message) {
  const el = document.getElementById(errorId);
  if (el) {
    el.textContent = message;
    el.classList.add('visible');
  }
}

function clearFormErrors() {
  $$('.form-error').forEach(e => e.classList.remove('visible'));
  $$('.form-input.error').forEach(e => e.classList.remove('error'));
}

// ============================================
// NOTIFICATIONS
// ============================================

/**
 * Show a toast notification
 * @param {string} message
 * @param {'success'|'error'|'info'} type
 */
function showNotification(message, type = 'info') {
  const container = elements.notifContainer;
  const notif = document.createElement('div');
  notif.className = `notification ${type}`;

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };

  notif.innerHTML = `
    <span class="notification-icon">${icons[type]}</span>
    <span class="notification-text">${escapeHtml(message)}</span>
  `;

  container.appendChild(notif);

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    notif.classList.add('fade-out');
    setTimeout(() => notif.remove(), 300);
  }, 3500);
}

// ============================================
// DATA MANAGEMENT
// ============================================

/**
 * Export all movies as a JSON file
 */
function exportMovies() {
  if (movies.length === 0) {
    showNotification('No movies to export.', 'info');
    return;
  }

  const data = JSON.stringify(movies, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `el5al_films_backup_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showNotification(`Exported ${movies.length} movies successfully!`, 'success');
}

/**
 * Import movies from a JSON file
 */
function importMovies(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);

      if (!Array.isArray(imported)) {
        showNotification('Invalid file format. Expected an array of movies.', 'error');
        return;
      }

      // Validate each movie has at least a title
      const valid = imported.filter(m => m && typeof m.title === 'string' && m.title.trim());

      if (valid.length === 0) {
        showNotification('No valid movies found in the file.', 'error');
        return;
      }

      // Assign IDs if missing, avoid duplicates
      let addedCount = 0;
      valid.forEach(m => {
        if (!m.id) m.id = generateId();
        if (!m.createdAt) m.createdAt = Date.now();
        if (!m.updatedAt) m.updatedAt = Date.now();
        if (!m.status) m.status = 'watched';
        if (typeof m.rating !== 'number') m.rating = 0;
        if (typeof m.favorite !== 'boolean') m.favorite = false;

        // Check for duplicate titles
        const exists = movies.some(
          existing => existing.title.toLowerCase() === m.title.trim().toLowerCase()
        );
        if (!exists) {
          movies.push(m);
          addedCount++;
        }
      });

      saveMovies(movies);
      renderAll();
      showNotification(
        `Imported ${addedCount} movie(s). ${valid.length - addedCount} duplicates skipped.`,
        'success'
      );
    } catch (err) {
      showNotification('Failed to parse JSON file.', 'error');
      console.error('Import error:', err);
    }
  };

  reader.readAsText(file);
  // Reset input so the same file can be selected again
  e.target.value = '';
}

/**
 * Clear all data with confirmation
 */
function clearAllData() {
  if (movies.length === 0) {
    showNotification('No data to clear.', 'info');
    return;
  }

  elements.confirmText.textContent = `Are you sure you want to delete ALL ${movies.length} movies? This cannot be undone!`;

  elements.confirmYes.onclick = () => {
    movies = [];
    saveMovies(movies);
    closeAllModals();
    renderAll();
    showNotification('All movies have been cleared.', 'error');
  };

  openModal(elements.confirmModal);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Debounce function for search input
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Create ripple effect on button click
 */
function createRipple(event, button) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';

  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}
