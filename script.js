/* ============================================
   El-5al Movie - Premium Movie Journal
   Professional Application v4.0
   ============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const i18n = {
  en: {
    brand: 'El-5al Movie',
    tagline: 'MOVIE JOURNAL',
    footer: 'Every Film You Watch, Every Memory You Keep.',
    
    navMain: 'Library',
    navMovies: 'Movies',
    navSeries: 'Film Series', 
    navTVShows: 'TV Shows',
    navTools: 'Tools',
    navExport: 'Export Backup',
    navClear: 'Clear All Data',
    
    movies: 'Movies',
    series: 'Film Series',
    tvshows: 'TV Shows',
    
    total: 'Total',
    watched: 'Watched',
    planning: 'Planning',
    watching: 'Watching',
    favorites: 'Favorites',
    avgRating: 'Avg Rating',
    parts: 'Parts',
    seasons: 'Seasons',
    
    search: 'Search...',
    all: 'All',
    newest: 'Newest',
    oldest: 'Oldest',
    topRated: 'Top Rated',
    aToZ: 'A-Z',
    allGenres: 'All Genres',
    
    addMovie: 'Add Movie',
    addSeries: 'Add Series',
    addTVShow: 'Add TV Show',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    yesDelete: 'Delete',
    
    title: 'Title',
    genre: 'Genre',
    year: 'Release Year',
    rating: 'Rating',
    status: 'Status',
    favorite: 'Add to Favorites',
    notes: 'Notes',
    numParts: 'Number of Parts',
    numSeasons: 'Seasons',
    numEpisodes: 'Episodes',
    addedOn: 'Added',
    
    statusWatched: 'Watched',
    statusPlanning: 'Planning',
    statusWatching: 'Watching',
    
    required: 'is required',
    exists: 'already exists',
    added: 'added!',
    updated: 'updated!',
    deleted: 'deleted',
    favAdded: 'added to favorites',
    favRemoved: 'removed from favorites',
    exported: 'Backup exported!',
    noData: 'No data to export',
    cleared: 'All data cleared',
    confirmDel: 'Delete',
    confirmClear: 'Delete all data? This cannot be undone!',
    
    emptyMovies: 'No Movies Yet',
    emptySeries: 'No Series Yet',
    emptyTVShows: 'No TV Shows Yet',
    emptyHint: 'Start building your collection',
    noResults: 'No Results',
    tryAgain: 'Try different filters',
    
    newMovie: 'New Movie',
    editMovie: 'Edit Movie',
    movieDetails: 'Movie Details',
    newSeries: 'New Series',
    editSeries: 'Edit Series',
    seriesDetails: 'Series Details',
    newTVShow: 'New TV Show',
    editTVShow: 'Edit TV Show',
    tvshowDetails: 'TV Show Details',
    
    partsUnit: 'parts',
    seasonsUnit: 'seasons',
    episodesUnit: 'episodes',
    itemsLabel: 'items',
  },
  ar: {
    brand: 'El-5al Movie',
    tagline: 'مجلة الأفلام',
    footer: 'كل فيلم تشاهده، كل ذكرى تحتفظ بها.',
    
    navMain: 'المكتبة',
    navMovies: 'الأفلام',
    navSeries: 'سلاسل الأفلام',
    navTVShows: 'المسلسلات',
    navTools: 'الأدوات',
    navExport: 'تصدير نسخة احتياطية',
    navClear: 'حذف كل البيانات',
    
    movies: 'الأفلام',
    series: 'سلاسل الأفلام',
    tvshows: 'المسلسلات',
    
    total: 'الإجمالي',
    watched: 'تمت المشاهدة',
    planning: 'قائمة المشاهدة',
    watching: 'أشاهد حالياً',
    favorites: 'المفضلة',
    avgRating: 'متوسط التقييم',
    parts: 'الأجزاء',
    seasons: 'المواسم',
    
    search: 'بحث...',
    all: 'الكل',
    newest: 'الأحدث',
    oldest: 'الأقدم',
    topRated: 'الأعلى تقييماً',
    aToZ: 'أبجدي',
    allGenres: 'كل الأنواع',
    
    addMovie: 'إضافة فيلم',
    addSeries: 'إضافة سلسلة',
    addTVShow: 'إضافة مسلسل',
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    yesDelete: 'حذف',
    
    title: 'العنوان',
    genre: 'النوع',
    year: 'سنة الإصدار',
    rating: 'التقييم',
    status: 'الحالة',
    favorite: 'إضافة للمفضلة',
    notes: 'ملاحظات',
    numParts: 'عدد الأجزاء',
    numSeasons: 'المواسم',
    numEpisodes: 'الحلقات',
    addedOn: 'تاريخ الإضافة',
    
    statusWatched: 'تمت المشاهدة',
    statusPlanning: 'في قائمة المشاهدة',
    statusWatching: 'أشاهد حالياً',
    
    required: 'مطلوب',
    exists: 'موجود مسبقاً',
    added: 'تمت الإضافة!',
    updated: 'تم التحديث!',
    deleted: 'تم الحذف',
    favAdded: 'أُضيف للمفضلة',
    favRemoved: 'أُزيل من المفضلة',
    exported: 'تم التصدير!',
    noData: 'لا توجد بيانات',
    cleared: 'تم حذف كل البيانات',
    confirmDel: 'حذف',
    confirmClear: 'حذف كل البيانات؟ لا يمكن التراجع!',
    
    emptyMovies: 'لا توجد أفلام',
    emptySeries: 'لا توجد سلاسل',
    emptyTVShows: 'لا توجد مسلسلات',
    emptyHint: 'ابدأ ببناء مجموعتك',
    noResults: 'لا توجد نتائج',
    tryAgain: 'جرب فلاتر مختلفة',
    
    newMovie: 'فيلم جديد',
    editMovie: 'تعديل الفيلم',
    movieDetails: 'تفاصيل الفيلم',
    newSeries: 'سلسلة جديدة',
    editSeries: 'تعديل السلسلة',
    seriesDetails: 'تفاصيل السلسلة',
    newTVShow: 'مسلسل جديد',
    editTVShow: 'تعديل المسلسل',
    tvshowDetails: 'تفاصيل المسلسل',
    
    partsUnit: 'أجزاء',
    seasonsUnit: 'مواسم',
    episodesUnit: 'حلقات',
    itemsLabel: 'عناصر',
  }
};

const genres = {
  en: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Fantasy', 'Horror', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'War', 'Other'],
  ar: ['أكشن', 'مغامرة', 'رسوم متحركة', 'كوميدي', 'جريمة', 'وثائقي', 'دراما', 'فانتازيا', 'رعب', 'موسيقي', 'غموض', 'رومانسي', 'خيال علمي', 'إثارة', 'حرب', 'أخرى']
};

// ============================================
// STATE
// ============================================
const KEYS = { movies: 'el5al_m', series: 'el5al_s', tvshows: 'el5al_t', lang: 'el5al_l', page: 'el5al_p' };

let lang = localStorage.getItem(KEYS.lang) || 'en';
let movies = JSON.parse(localStorage.getItem(KEYS.movies) || '[]');
let series = JSON.parse(localStorage.getItem(KEYS.series) || '[]');
let tvshows = JSON.parse(localStorage.getItem(KEYS.tvshows) || '[]');
let page = localStorage.getItem(KEYS.page) || 'movies';
let filter = 'all';
let sort = 'newest';
let genreFilter = 'all';
let search = '';
let editId = null;

// ============================================
// HELPERS
// ============================================
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = k => i18n[lang][k] || k;
const save = (k, d) => localStorage.setItem(k, JSON.stringify(d));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const esc = s => { const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML; };
const stars = r => '★'.repeat(Math.round(r/2)) + '☆'.repeat(5 - Math.round(r/2));
const debounce = (f, d) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => f(...a), d); }; };

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  bind();
  go(page);
});

// ============================================
// LANGUAGE
// ============================================
function setLang(l) {
  lang = l;
  localStorage.setItem(KEYS.lang, l);
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = l;
  $('#lang-en').classList.toggle('active', l === 'en');
  $('#lang-ar').classList.toggle('active', l === 'ar');
  updateText();
  updateCounts();
  render();
}

function updateText() {
  $('#brand-name').textContent = t('brand');
  $('#brand-tagline').textContent = t('tagline');
  $('#nav-main-label').textContent = t('navMain');
  $('#nav-movies-text').textContent = t('navMovies');
  $('#nav-series-text').textContent = t('navSeries');
  $('#nav-tvshows-text').textContent = t('navTVShows');
  $('#nav-tools-label').textContent = t('navTools');
  $('#nav-export-text').textContent = t('navExport');
  $('#nav-clear-text').textContent = t('navClear');
  $('#footer-text').textContent = t('footer');
  updateHeader();
}

function updateCounts() {
  $('#nav-movies-count').textContent = movies.length;
  $('#nav-series-count').textContent = series.length;
  $('#nav-tvshows-count').textContent = tvshows.length;
}

// ============================================
// NAVIGATION
// ============================================
function go(p) {
  page = p;
  filter = 'all';
  genreFilter = 'all';
  search = '';
  localStorage.setItem(KEYS.page, p);
  
  $$('.nav-link[data-page]').forEach(el => el.classList.toggle('active', el.dataset.page === p));
  $$('.page-section').forEach(el => el.classList.toggle('active', el.id === `page-${p}`));
  
  closeSidebar();
  updateHeader();
  populateGenres();
  render();
}

function updateHeader() {
  const icons = { movies: '🎬', series: '🎞️', tvshows: '📺' };
  const titles = { movies: t('movies'), series: t('series'), tvshows: t('tvshows') };
  const adds = { movies: t('addMovie'), series: t('addSeries'), tvshows: t('addTVShow') };
  const data = getData();
  
  $('#header-icon').textContent = icons[page];
  $('#header-title').textContent = titles[page];
  $('#header-count').textContent = `${data.length} ${t('itemsLabel')}`;
  $('#add-btn').innerHTML = `<span style="font-size:18px">+</span> ${adds[page]}`;
  $('#search-input').placeholder = t('search');
  $('#search-input').value = '';
  
  // Filters
  $('#filter-all span').textContent = t('all');
  $('#filter-watched span').textContent = t('watched');
  $('#filter-planning span').textContent = t('planning');
  $('#filter-watching span').textContent = t('watching');
  $('#filter-favorites span').textContent = t('favorites');
  $('#filter-watching').style.display = page === 'tvshows' ? 'flex' : 'none';
  
  $$('.filter-pill').forEach(el => el.classList.toggle('active', el.dataset.filter === 'all'));
  
  // Sort
  const sortSel = $('#sort-select');
  sortSel.innerHTML = `
    <option value="newest">${t('newest')}</option>
    <option value="oldest">${t('oldest')}</option>
    <option value="rating">${t('topRated')}</option>
    <option value="alpha">${t('aToZ')}</option>
  `;
}

function populateGenres() {
  const g = genres[lang];
  const sel = $('#genre-select');
  sel.innerHTML = `<option value="all">${t('allGenres')}</option>` + g.map(x => `<option value="${x}">${x}</option>`).join('');
}

// ============================================
// SIDEBAR
// ============================================
function toggleSidebar() {
  $('.sidebar').classList.toggle('open');
  $('.sidebar-backdrop').classList.toggle('open');
}

function closeSidebar() {
  $('.sidebar').classList.remove('open');
  $('.sidebar-backdrop').classList.remove('open');
}

// ============================================
// EVENTS
// ============================================
function bind() {
  $('#lang-en').onclick = () => setLang('en');
  $('#lang-ar').onclick = () => setLang('ar');
  $('#mobile-toggle').onclick = toggleSidebar;
  $('.sidebar-backdrop').onclick = closeSidebar;
  
  $$('.nav-link[data-page]').forEach(el => el.onclick = () => go(el.dataset.page));
  $('#nav-export').onclick = exportData;
  $('#nav-clear').onclick = clearAll;
  
  $('#search-input').oninput = debounce(e => { search = e.target.value.trim().toLowerCase(); renderGrid(); }, 200);
  
  $$('.filter-pill').forEach(el => el.onclick = () => {
    $$('.filter-pill').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    filter = el.dataset.filter;
    renderGrid();
  });
  
  $('#sort-select').onchange = e => { sort = e.target.value; renderGrid(); };
  $('#genre-select').onchange = e => { genreFilter = e.target.value; renderGrid(); };
  
  $('#add-btn').onclick = openAdd;
  $('#content-form').onsubmit = e => { e.preventDefault(); handleSave(); };
  
  $$('[data-close]').forEach(el => el.onclick = closeModals);
  $$('.modal-backdrop').forEach(el => el.onclick = e => { if (e.target === el) closeModals(); });
  
  document.onkeydown = e => {
    if (e.key === 'Escape') closeModals();
    if (e.key === 'Enter' && $('#form-modal').classList.contains('open') && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSave();
    }
  };
}

// ============================================
// RENDER
// ============================================
function render() {
  renderStats();
  renderGrid();
  updateCounts();
}

function getData() {
  return page === 'movies' ? movies : page === 'series' ? series : tvshows;
}

function renderStats() {
  const c = $(`#stats-${page}`);
  const d = getData();
  
  if (page === 'movies') {
    const w = d.filter(x => x.status === 'watched').length;
    const p = d.filter(x => x.status === 'planning').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat-card"><div class="stat-icon">🎬</div><div class="stat-data"><span class="stat-value">${d.length}</span><span class="stat-label">${t('total')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-data"><span class="stat-value">${w}</span><span class="stat-label">${t('watched')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">📋</div><div class="stat-data"><span class="stat-value">${p}</span><span class="stat-label">${t('planning')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">❤️</div><div class="stat-data"><span class="stat-value">${f}</span><span class="stat-label">${t('favorites')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-data"><span class="stat-value">${a}</span><span class="stat-label">${t('avgRating')}</span></div></div>
    `;
  } else if (page === 'series') {
    const pts = d.reduce((s,x) => s + (x.parts || 0), 0);
    const w = d.filter(x => x.status === 'watched').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat-card"><div class="stat-icon">🎞️</div><div class="stat-data"><span class="stat-value">${d.length}</span><span class="stat-label">${t('total')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">🎬</div><div class="stat-data"><span class="stat-value">${pts}</span><span class="stat-label">${t('parts')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-data"><span class="stat-value">${w}</span><span class="stat-label">${t('watched')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">❤️</div><div class="stat-data"><span class="stat-value">${f}</span><span class="stat-label">${t('favorites')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-data"><span class="stat-value">${a}</span><span class="stat-label">${t('avgRating')}</span></div></div>
    `;
  } else {
    const ss = d.reduce((s,x) => s + (x.seasons || 0), 0);
    const w = d.filter(x => x.status === 'watched').length;
    const wg = d.filter(x => x.status === 'watching').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat-card"><div class="stat-icon">📺</div><div class="stat-data"><span class="stat-value">${d.length}</span><span class="stat-label">${t('total')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">📅</div><div class="stat-data"><span class="stat-value">${ss}</span><span class="stat-label">${t('seasons')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-data"><span class="stat-value">${w}</span><span class="stat-label">${t('watched')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">▶️</div><div class="stat-data"><span class="stat-value">${wg}</span><span class="stat-label">${t('watching')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">❤️</div><div class="stat-data"><span class="stat-value">${f}</span><span class="stat-label">${t('favorites')}</span></div></div>
      <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-data"><span class="stat-value">${a}</span><span class="stat-label">${t('avgRating')}</span></div></div>
    `;
  }
}

function getFiltered() {
  let d = [...getData()];
  
  if (search) d = d.filter(x => x.title.toLowerCase().includes(search) || (x.genre && x.genre.toLowerCase().includes(search)) || (x.notes && x.notes.toLowerCase().includes(search)));
  if (filter === 'watched') d = d.filter(x => x.status === 'watched');
  else if (filter === 'planning') d = d.filter(x => x.status === 'planning');
  else if (filter === 'watching') d = d.filter(x => x.status === 'watching');
  else if (filter === 'favorites') d = d.filter(x => x.favorite);
  if (genreFilter !== 'all') d = d.filter(x => x.genre === genreFilter);
  
  if (sort === 'newest') d.sort((a,b) => b.createdAt - a.createdAt);
  else if (sort === 'oldest') d.sort((a,b) => a.createdAt - b.createdAt);
  else if (sort === 'rating') d.sort((a,b) => b.rating - a.rating);
  else if (sort === 'alpha') d.sort((a,b) => a.title.localeCompare(b.title, lang));
  
  return d;
}

function renderGrid() {
  const f = getFiltered();
  const g = $(`#grid-${page}`);
  const all = getData();
  
  if (!f.length) {
    const icons = { movies: '🎬', series: '🎞️', tvshows: '📺' };
    const empties = { movies: t('emptyMovies'), series: t('emptySeries'), tvshows: t('emptyTVShows') };
    g.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${icons[page]}</div>
        <div class="empty-title">${all.length ? t('noResults') : empties[page]}</div>
        <div class="empty-text">${all.length ? t('tryAgain') : t('emptyHint')}</div>
        ${!all.length ? `<button class="btn btn-primary" onclick="openAdd()">${t('addMovie').split(' ')[0]}</button>` : ''}
      </div>
    `;
    return;
  }
  
  g.innerHTML = f.map((x, i) => card(x, i)).join('');
}

function card(x, i) {
  const cls = page === 'series' ? 'series-card' : page === 'tvshows' ? 'tvshow-card' : '';
  const stCls = x.status === 'watched' ? 'status-watched' : x.status === 'watching' ? 'status-watching' : 'status-planning';
  const stTxt = x.status === 'watched' ? t('statusWatched') : x.status === 'watching' ? t('statusWatching') : t('statusPlanning');
  
  let extra = '';
  if (page === 'series' && x.parts) extra = `<span class="tag tag-parts">${x.parts} ${t('partsUnit')}</span>`;
  if (page === 'tvshows' && x.seasons) extra = `<span class="tag tag-seasons">${x.seasons} ${t('seasonsUnit')}</span>`;
  
  return `
    <article class="card ${cls}" style="animation-delay:${i * 0.04}s">
      <div class="card-header">
        <h3 class="card-title" onclick="openDetail('${x.id}')">${esc(x.title)}</h3>
        <button class="fav-btn ${x.favorite ? 'active' : ''}" onclick="toggleFav('${x.id}')">${x.favorite ? '❤️' : '🤍'}</button>
      </div>
      <div class="card-meta">
        ${x.genre ? `<span class="tag tag-genre">${esc(x.genre)}</span>` : ''}
        ${x.year ? `<span class="card-year">${x.year}</span>` : ''}
        ${extra}
      </div>
      ${x.rating > 0 ? `<div class="card-rating"><span class="rating-stars">${stars(x.rating)}</span><span class="rating-value">${x.rating}/10</span></div>` : ''}
      <div class="card-status"><span class="status-badge ${stCls}">${stTxt}</span></div>
      ${x.notes ? `<p class="card-notes">"${esc(x.notes)}"</p>` : ''}
      <div class="card-actions">
        <button class="btn btn-ghost" onclick="openEdit('${x.id}')">✏️ ${t('edit')}</button>
        <button class="btn btn-ghost" onclick="confirmDel('${x.id}')">🗑️ ${t('delete')}</button>
      </div>
    </article>
  `;
}

// ============================================
// MODALS
// ============================================
function openModal(id) {
  $(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  $$('.modal-backdrop').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

function openAdd() {
  editId = null;
  const titles = { movies: t('newMovie'), series: t('newSeries'), tvshows: t('newTVShow') };
  $('#form-title').innerHTML = `✨ ${titles[page]}`;
  buildForm();
  $('#content-form').reset();
  $('#rating-val').textContent = '5';
  $('#rating-input').value = 5;
  clearErrors();
  openModal('#form-modal');
  setTimeout(() => $('#title-input').focus(), 100);
}

function openEdit(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  
  editId = id;
  const titles = { movies: t('editMovie'), series: t('editSeries'), tvshows: t('editTVShow') };
  $('#form-title').innerHTML = `✏️ ${titles[page]}`;
  buildForm();
  
  $('#title-input').value = x.title;
  $('#genre-input').value = x.genre || '';
  $('#year-input').value = x.year || '';
  $('#rating-input').value = x.rating || 5;
  $('#rating-val').textContent = x.rating || 5;
  $('#status-input').value = x.status;
  $('#fav-input').checked = x.favorite;
  $('#notes-input').value = x.notes || '';
  
  if (page === 'series' && $('#parts-input')) $('#parts-input').value = x.parts || '';
  if (page === 'tvshows') {
    if ($('#seasons-input')) $('#seasons-input').value = x.seasons || '';
    if ($('#episodes-input')) $('#episodes-input').value = x.episodes || '';
  }
  
  clearErrors();
  openModal('#form-modal');
}

function buildForm() {
  const g = genres[lang];
  const c = $('#form-fields');
  
  const genreOpts = `<option value="">${t('genre')}</option>` + g.map(x => `<option value="${x}">${x}</option>`).join('');
  const statusOpts = page === 'tvshows'
    ? `<option value="watched">✅ ${t('statusWatched')}</option><option value="watching">▶️ ${t('statusWatching')}</option><option value="planning">📋 ${t('statusPlanning')}</option>`
    : `<option value="watched">✅ ${t('statusWatched')}</option><option value="planning">📋 ${t('statusPlanning')}</option>`;
  
  let html = `
    <div class="form-group">
      <label class="form-label">${t('title')} *</label>
      <input type="text" id="title-input" class="form-input" maxlength="200">
      <div class="form-error" id="title-error"></div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">${t('genre')}</label>
        <select id="genre-input" class="form-select">${genreOpts}</select>
      </div>
      <div class="form-group">
        <label class="form-label">${t('year')}</label>
        <input type="number" id="year-input" class="form-input" min="1888" max="2099">
      </div>
    </div>
  `;
  
  if (page === 'series') {
    html += `
      <div class="form-group">
        <label class="form-label">${t('numParts')} *</label>
        <input type="number" id="parts-input" class="form-input" min="1" max="100">
        <div class="form-error" id="parts-error"></div>
      </div>
    `;
  }
  
  if (page === 'tvshows') {
    html += `
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${t('numSeasons')}</label>
          <input type="number" id="seasons-input" class="form-input" min="1" max="100">
        </div>
        <div class="form-group">
          <label class="form-label">${t('numEpisodes')}</label>
          <input type="number" id="episodes-input" class="form-input" min="1" max="9999">
        </div>
      </div>
    `;
  }
  
  html += `
    <div class="form-group">
      <label class="form-label">${t('rating')}</label>
      <div class="rating-box">
        <input type="range" id="rating-input" class="rating-slider" min="0" max="10" value="5">
        <span id="rating-val" class="rating-display">5</span>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">${t('status')}</label>
      <select id="status-input" class="form-select">${statusOpts}</select>
    </div>
    <div class="form-group">
      <label class="checkbox-wrap">
        <input type="checkbox" id="fav-input" class="checkbox-input">
        <span class="checkbox-label">❤️ ${t('favorite')}</span>
      </label>
    </div>
    <div class="form-group">
      <label class="form-label">${t('notes')}</label>
      <textarea id="notes-input" class="form-textarea" maxlength="1000"></textarea>
    </div>
  `;
  
  c.innerHTML = html;
  $('#rating-input').oninput = e => $('#rating-val').textContent = e.target.value;
  $('#save-btn').innerHTML = `💾 ${t('save')}`;
  $('#cancel-btn').textContent = t('cancel');
}

function openDetail(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  
  const titles = { movies: t('movieDetails'), series: t('seriesDetails'), tvshows: t('tvshowDetails') };
  const stCls = x.status === 'watched' ? 'status-watched' : x.status === 'watching' ? 'status-watching' : 'status-planning';
  const stTxt = x.status === 'watched' ? t('statusWatched') : x.status === 'watching' ? t('statusWatching') : t('statusPlanning');
  
  let extra = '';
  if (page === 'series' && x.parts) extra = `<div class="detail-item"><label>${t('numParts')}</label><span>${x.parts} ${t('partsUnit')}</span></div>`;
  if (page === 'tvshows') {
    extra = `
      ${x.seasons ? `<div class="detail-item"><label>${t('numSeasons')}</label><span>${x.seasons}</span></div>` : ''}
      ${x.episodes ? `<div class="detail-item"><label>${t('numEpisodes')}</label><span>${x.episodes}</span></div>` : ''}
    `;
  }
  
  $('#detail-title').innerHTML = `🎬 ${titles[page]}`;
  $('#detail-body').innerHTML = `
    <h2 class="detail-title">${esc(x.title)}</h2>
    <div class="detail-badges">
      <span class="status-badge ${stCls}">${stTxt}</span>
      ${x.favorite ? `<span class="status-badge status-watched">❤️ ${t('favorites')}</span>` : ''}
    </div>
    <div class="detail-grid">
      ${x.genre ? `<div class="detail-item"><label>${t('genre')}</label><span>${esc(x.genre)}</span></div>` : ''}
      ${x.year ? `<div class="detail-item"><label>${t('year')}</label><span>${x.year}</span></div>` : ''}
      ${extra}
    </div>
    ${x.rating > 0 ? `
      <div class="detail-item" style="margin-bottom:20px">
        <label>${t('rating')}</label>
        <div class="detail-rating">
          <span class="detail-rating-value">${x.rating}<span class="detail-rating-max">/10</span></span>
          <span class="detail-stars">${stars(x.rating)}</span>
        </div>
      </div>
    ` : ''}
    ${x.notes ? `<div class="detail-notes">${esc(x.notes)}</div>` : ''}
    <div class="detail-item"><label>${t('addedOn')}</label><span>${new Date(x.createdAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year:'numeric', month:'long', day:'numeric' })}</span></div>
    <div class="detail-actions">
      <button class="btn btn-primary" onclick="closeModals();openEdit('${x.id}')">✏️ ${t('edit')}</button>
      <button class="btn btn-danger" onclick="closeModals();confirmDel('${x.id}')">🗑️ ${t('delete')}</button>
    </div>
  `;
  
  openModal('#detail-modal');
}

// ============================================
// CRUD
// ============================================
function handleSave() {
  clearErrors();
  
  const title = $('#title-input').value.trim();
  const genre = $('#genre-input').value;
  const year = $('#year-input').value ? parseInt($('#year-input').value) : null;
  const rating = parseInt($('#rating-input').value);
  const status = $('#status-input').value;
  const favorite = $('#fav-input').checked;
  const notes = $('#notes-input').value.trim();
  
  if (!title) {
    showError('title-error', `${t('title')} ${t('required')}`);
    $('#title-input').classList.add('error');
    $('#title-input').focus();
    return;
  }
  
  const d = getData();
  if (d.find(x => x.title.toLowerCase() === title.toLowerCase() && x.id !== editId)) {
    showError('title-error', `"${title}" ${t('exists')}`);
    $('#title-input').classList.add('error');
    return;
  }
  
  let parts = null;
  if (page === 'series') {
    parts = $('#parts-input').value ? parseInt($('#parts-input').value) : null;
    if (!parts) {
      showError('parts-error', `${t('numParts')} ${t('required')}`);
      $('#parts-input').classList.add('error');
      return;
    }
  }
  
  let seasons = null, episodes = null;
  if (page === 'tvshows') {
    seasons = $('#seasons-input').value ? parseInt($('#seasons-input').value) : null;
    episodes = $('#episodes-input').value ? parseInt($('#episodes-input').value) : null;
  }
  
  const item = {
    id: editId || uid(),
    title, genre, year, rating, status, favorite, notes,
    createdAt: editId ? d.find(x => x.id === editId).createdAt : Date.now(),
    updatedAt: Date.now()
  };
  
  if (page === 'series') item.parts = parts;
  if (page === 'tvshows') { item.seasons = seasons; item.episodes = episodes; }
  
  if (editId) {
    const i = d.findIndex(x => x.id === editId);
    if (i > -1) d[i] = item;
    toast(`"${title}" ${t('updated')}`, 'success');
  } else {
    d.push(item);
    toast(`"${title}" ${t('added')}`, 'success');
  }
  
  saveData(d);
  closeModals();
  render();
}

function saveData(d) {
  if (page === 'movies') { movies = d; save(KEYS.movies, d); }
  else if (page === 'series') { series = d; save(KEYS.series, d); }
  else { tvshows = d; save(KEYS.tvshows, d); }
}

function toggleFav(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  x.favorite = !x.favorite;
  x.updatedAt = Date.now();
  saveData(d);
  render();
  toast(`"${x.title}" ${x.favorite ? t('favAdded') : t('favRemoved')}`, 'info');
}

function confirmDel(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  
  $('#confirm-text').textContent = `${t('confirmDel')} "${x.title}"?`;
  $('#confirm-yes').textContent = t('yesDelete');
  $('#confirm-cancel').textContent = t('cancel');
  $('#confirm-yes').onclick = () => { delItem(id); closeModals(); };
  openModal('#confirm-modal');
}

function delItem(id) {
  let d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  d = d.filter(i => i.id !== id);
  saveData(d);
  render();
  toast(`"${x.title}" ${t('deleted')}`, 'error');
}

// ============================================
// DATA
// ============================================
function exportData() {
  const all = { movies, series, tvshows, date: new Date().toISOString() };
  const n = movies.length + series.length + tvshows.length;
  if (!n) { toast(t('noData'), 'info'); closeSidebar(); return; }
  
  const b = new Blob([JSON.stringify(all, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = `el5al_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  closeSidebar();
  toast(t('exported'), 'success');
}

function clearAll() {
  const n = movies.length + series.length + tvshows.length;
  if (!n) { toast(t('noData'), 'info'); closeSidebar(); return; }
  
  $('#confirm-text').textContent = t('confirmClear');
  $('#confirm-yes').textContent = t('yesDelete');
  $('#confirm-cancel').textContent = t('cancel');
  $('#confirm-yes').onclick = () => {
    movies = []; series = []; tvshows = [];
    save(KEYS.movies, []); save(KEYS.series, []); save(KEYS.tvshows, []);
    closeModals(); closeSidebar(); render();
    toast(t('cleared'), 'error');
  };
  closeSidebar();
  openModal('#confirm-modal');
}

// ============================================
// HELPERS
// ============================================
function showError(id, msg) {
  const e = document.getElementById(id);
  if (e) { e.textContent = msg; e.classList.add('show'); }
}

function clearErrors() {
  $$('.form-error').forEach(e => e.classList.remove('show'));
  $$('.form-input.error').forEach(e => e.classList.remove('error'));
}

function toast(msg, type = 'info') {
  const c = $('#toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  t.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-text">${esc(msg)}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 300); }, 3500);
}
