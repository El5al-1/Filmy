/* ============================================
   El-5al Movie - Script v5.0 Final
   ============================================ */

// Translations
const L = {
  en: {
    brand: 'El-5al Movie',
    tag: 'MOVIE JOURNAL',
    footer: 'Every Film You Watch, Every Memory You Keep.',
    lib: 'Library',
    tools: 'Tools',
    movies: 'Movies',
    series: 'Film Series',
    tvshows: 'TV Shows',
    export: 'Export Backup',
    clear: 'Clear All',
    items: 'items',
    search: 'Search...',
    add: 'Add',
    all: 'All',
    watched: 'Watched',
    watching: 'Watching',
    planning: 'Planning',
    favorites: 'Favorites',
    newest: 'Newest',
    oldest: 'Oldest',
    topRated: 'Top Rated',
    az: 'A-Z',
    allGenres: 'All Genres',
    title: 'Title',
    genre: 'Genre',
    year: 'Year',
    rating: 'Rating',
    status: 'Status',
    fav: 'Add to Favorites',
    notes: 'Notes',
    parts: 'Parts',
    seasons: 'Seasons',
    episodes: 'Episodes',
    added: 'Added',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Delete',
    sWatched: 'Watched',
    sPlanning: 'Planning',
    sWatching: 'Watching',
    req: 'is required',
    exists: 'already exists',
    msgAdd: 'added!',
    msgUpd: 'updated!',
    msgDel: 'deleted',
    msgFavOn: 'added to favorites',
    msgFavOff: 'removed from favorites',
    msgExp: 'Backup exported!',
    msgClr: 'All data cleared',
    noData: 'No data',
    emptyM: 'No Movies Yet',
    emptyS: 'No Series Yet',
    emptyT: 'No TV Shows Yet',
    emptyH: 'Start your collection',
    noRes: 'No Results',
    tryAgain: 'Try different filters',
    newM: 'New Movie',
    editM: 'Edit Movie',
    detailM: 'Movie Details',
    newS: 'New Series',
    editS: 'Edit Series',
    detailS: 'Series Details',
    newT: 'New TV Show',
    editT: 'Edit TV Show',
    detailT: 'TV Show Details',
    uParts: 'parts',
    uSeasons: 'seasons',
    total: 'Total',
    avgRating: 'Avg Rating',
    confirmClear: 'Delete all data? Cannot be undone!'
  },
  ar: {
    brand: 'El-5al Movie',
    tag: 'مجلة الأفلام',
    footer: 'كل فيلم تشاهده، كل ذكرى تحتفظ بها.',
    lib: 'المكتبة',
    tools: 'الأدوات',
    movies: 'الأفلام',
    series: 'سلاسل الأفلام',
    tvshows: 'المسلسلات',
    export: 'تصدير نسخة',
    clear: 'حذف الكل',
    items: 'عناصر',
    search: 'بحث...',
    add: 'إضافة',
    all: 'الكل',
    watched: 'تمت المشاهدة',
    watching: 'أشاهد الآن',
    planning: 'في الخطة',
    favorites: 'المفضلة',
    newest: 'الأحدث',
    oldest: 'الأقدم',
    topRated: 'الأعلى تقييماً',
    az: 'أبجدي',
    allGenres: 'كل الأنواع',
    title: 'العنوان',
    genre: 'النوع',
    year: 'السنة',
    rating: 'التقييم',
    status: 'الحالة',
    fav: 'إضافة للمفضلة',
    notes: 'ملاحظات',
    parts: 'الأجزاء',
    seasons: 'المواسم',
    episodes: 'الحلقات',
    added: 'تاريخ الإضافة',
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    confirm: 'حذف',
    sWatched: 'تمت المشاهدة',
    sPlanning: 'في الخطة',
    sWatching: 'أشاهد الآن',
    req: 'مطلوب',
    exists: 'موجود مسبقاً',
    msgAdd: 'تمت الإضافة!',
    msgUpd: 'تم التحديث!',
    msgDel: 'تم الحذف',
    msgFavOn: 'أُضيف للمفضلة',
    msgFavOff: 'أُزيل من المفضلة',
    msgExp: 'تم التصدير!',
    msgClr: 'تم حذف كل البيانات',
    noData: 'لا توجد بيانات',
    emptyM: 'لا توجد أفلام',
    emptyS: 'لا توجد سلاسل',
    emptyT: 'لا توجد مسلسلات',
    emptyH: 'ابدأ مجموعتك',
    noRes: 'لا نتائج',
    tryAgain: 'جرب فلاتر مختلفة',
    newM: 'فيلم جديد',
    editM: 'تعديل الفيلم',
    detailM: 'تفاصيل الفيلم',
    newS: 'سلسلة جديدة',
    editS: 'تعديل السلسلة',
    detailS: 'تفاصيل السلسلة',
    newT: 'مسلسل جديد',
    editT: 'تعديل المسلسل',
    detailT: 'تفاصيل المسلسل',
    uParts: 'أجزاء',
    uSeasons: 'مواسم',
    total: 'الإجمالي',
    avgRating: 'متوسط التقييم',
    confirmClear: 'حذف كل البيانات؟ لا يمكن التراجع!'
  }
};

const G = {
  en: ['Action','Adventure','Animation','Comedy','Crime','Documentary','Drama','Fantasy','Horror','Musical','Mystery','Romance','Sci-Fi','Thriller','War','Other'],
  ar: ['أكشن','مغامرة','رسوم متحركة','كوميدي','جريمة','وثائقي','دراما','فانتازيا','رعب','موسيقي','غموض','رومانسي','خيال علمي','إثارة','حرب','أخرى']
};

// State
let lang = localStorage.getItem('el5_lang') || 'en';
let movies = JSON.parse(localStorage.getItem('el5_movies') || '[]');
let series = JSON.parse(localStorage.getItem('el5_series') || '[]');
let tvshows = JSON.parse(localStorage.getItem('el5_tvshows') || '[]');
let page = localStorage.getItem('el5_page') || 'movies';
let filter = 'all', sort = 'newest', genre = 'all', search = '', editId = null;

// Helpers
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = k => L[lang][k] || k;
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const esc = s => { const d = document.createElement('div'); d.textContent = s || ''; return d.innerHTML; };
const stars = r => '★'.repeat(Math.round(r/2)) + '☆'.repeat(5 - Math.round(r/2));

// Init
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  bind();
  go(page);
});

// Language
function setLang(l) {
  lang = l;
  localStorage.setItem('el5_lang', l);
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = l;
  $('#langEn').classList.toggle('active', l === 'en');
  $('#langAr').classList.toggle('active', l === 'ar');
  updateUI();
}

function updateUI() {
  $('#logoTitle').textContent = t('brand');
  $('#logoTag').textContent = t('tag');
  $('#menuLabel1').textContent = t('lib');
  $('#menuLabel2').textContent = t('tools');
  $('#navMovies').textContent = t('movies');
  $('#navSeries').textContent = t('series');
  $('#navTvshows').textContent = t('tvshows');
  $('#navExport').textContent = t('export');
  $('#navClear').textContent = t('clear');
  $('#footerText').textContent = t('footer');
  $('#countMovies').textContent = movies.length;
  $('#countSeries').textContent = series.length;
  $('#countTvshows').textContent = tvshows.length;
  updateHeader();
}

function updateHeader() {
  const icons = { movies: '🎬', series: '🎞️', tvshows: '📺' };
  const titles = { movies: t('movies'), series: t('series'), tvshows: t('tvshows') };
  const d = getData();
  
  $('#pageIcon').textContent = icons[page];
  $('#pageTitle').textContent = titles[page];
  $('#pageCount').textContent = `${d.length} ${t('items')}`;
  $('#addBtn').textContent = `+ ${t('add')}`;
  $('#searchInput').placeholder = t('search');
  $('#searchInput').value = '';
  
  $('#fAll').textContent = t('all');
  $('#fWatched').textContent = t('watched');
  $('#fWatching').textContent = t('watching');
  $('#fPlanning').textContent = t('planning');
  $('#fFavorites').textContent = t('favorites');
  $('#fWatchingBtn').style.display = page === 'tvshows' ? 'flex' : 'none';
  
  $$('.filter').forEach(f => f.classList.toggle('active', f.dataset.filter === 'all'));
  
  $('#sortFilter').innerHTML = `
    <option value="newest">${t('newest')}</option>
    <option value="oldest">${t('oldest')}</option>
    <option value="rating">${t('topRated')}</option>
    <option value="alpha">${t('az')}</option>
  `;
  
  $('#genreFilter').innerHTML = `<option value="all">${t('allGenres')}</option>` + G[lang].map(g => `<option value="${g}">${g}</option>`).join('');
}

// Navigation
function go(p) {
  page = p;
  filter = 'all';
  genre = 'all';
  search = '';
  localStorage.setItem('el5_page', p);
  
  $$('.menu-item[data-page]').forEach(m => m.classList.toggle('active', m.dataset.page === p));
  $$('.page').forEach(pg => pg.classList.toggle('active', pg.id === `page${cap(p)}`));
  
  closeSidebar();
  updateHeader();
  render();
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// Sidebar
function toggleSidebar() {
  $('#sidebar').classList.toggle('open');
  $('#overlay').classList.toggle('open');
}

function closeSidebar() {
  $('#sidebar').classList.remove('open');
  $('#overlay').classList.remove('open');
}

// Events
function bind() {
  $('#langEn').onclick = () => setLang('en');
  $('#langAr').onclick = () => setLang('ar');
  $('#menuBtn').onclick = toggleSidebar;
  $('#overlay').onclick = closeSidebar;
  
  $$('.menu-item[data-page]').forEach(m => m.onclick = () => go(m.dataset.page));
  $('#exportBtn').onclick = exportData;
  $('#clearBtn').onclick = clearAll;
  
  $('#searchInput').oninput = debounce(e => { search = e.target.value.trim().toLowerCase(); renderGrid(); }, 200);
  
  $$('.filter').forEach(f => f.onclick = () => {
    $$('.filter').forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    filter = f.dataset.filter;
    renderGrid();
  });
  
  $('#sortFilter').onchange = e => { sort = e.target.value; renderGrid(); };
  $('#genreFilter').onchange = e => { genre = e.target.value; renderGrid(); };
  
  $('#addBtn').onclick = openAdd;
  $('#itemForm').onsubmit = e => { e.preventDefault(); handleSave(); };
  
  $$('[data-close]').forEach(c => c.onclick = closeModals);
  $$('.modal-wrap').forEach(m => m.onclick = e => { if (e.target === m) closeModals(); });
  
  document.onkeydown = e => {
    if (e.key === 'Escape') closeModals();
    if (e.key === 'Enter' && $('#formModal').classList.contains('open') && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      handleSave();
    }
  };
}

function debounce(f, d) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => f(...a), d); }; }

// Render
function render() {
  renderStats();
  renderGrid();
  updateUI();
}

function getData() {
  return page === 'movies' ? movies : page === 'series' ? series : tvshows;
}

function renderStats() {
  const c = $(`#stats${cap(page)}`);
  const d = getData();
  
  if (page === 'movies') {
    const w = d.filter(x => x.status === 'watched').length;
    const p = d.filter(x => x.status === 'planning').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat"><div class="stat-icon">🎬</div><div><div class="stat-val">${d.length}</div><div class="stat-label">${t('total')}</div></div></div>
      <div class="stat"><div class="stat-icon">✅</div><div><div class="stat-val">${w}</div><div class="stat-label">${t('watched')}</div></div></div>
      <div class="stat"><div class="stat-icon">📋</div><div><div class="stat-val">${p}</div><div class="stat-label">${t('planning')}</div></div></div>
      <div class="stat"><div class="stat-icon">❤️</div><div><div class="stat-val">${f}</div><div class="stat-label">${t('favorites')}</div></div></div>
      <div class="stat"><div class="stat-icon">⭐</div><div><div class="stat-val">${a}</div><div class="stat-label">${t('avgRating')}</div></div></div>
    `;
  } else if (page === 'series') {
    const pts = d.reduce((s,x) => s + (x.parts || 0), 0);
    const w = d.filter(x => x.status === 'watched').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat"><div class="stat-icon">🎞️</div><div><div class="stat-val">${d.length}</div><div class="stat-label">${t('total')}</div></div></div>
      <div class="stat"><div class="stat-icon">🎬</div><div><div class="stat-val">${pts}</div><div class="stat-label">${t('parts')}</div></div></div>
      <div class="stat"><div class="stat-icon">✅</div><div><div class="stat-val">${w}</div><div class="stat-label">${t('watched')}</div></div></div>
      <div class="stat"><div class="stat-icon">❤️</div><div><div class="stat-val">${f}</div><div class="stat-label">${t('favorites')}</div></div></div>
      <div class="stat"><div class="stat-icon">⭐</div><div><div class="stat-val">${a}</div><div class="stat-label">${t('avgRating')}</div></div></div>
    `;
  } else {
    const ss = d.reduce((s,x) => s + (x.seasons || 0), 0);
    const w = d.filter(x => x.status === 'watched').length;
    const wg = d.filter(x => x.status === 'watching').length;
    const f = d.filter(x => x.favorite).length;
    const r = d.filter(x => x.rating > 0);
    const a = r.length ? (r.reduce((s,x) => s + x.rating, 0) / r.length).toFixed(1) : '0.0';
    c.innerHTML = `
      <div class="stat"><div class="stat-icon">📺</div><div><div class="stat-val">${d.length}</div><div class="stat-label">${t('total')}</div></div></div>
      <div class="stat"><div class="stat-icon">📅</div><div><div class="stat-val">${ss}</div><div class="stat-label">${t('seasons')}</div></div></div>
      <div class="stat"><div class="stat-icon">✅</div><div><div class="stat-val">${w}</div><div class="stat-label">${t('watched')}</div></div></div>
      <div class="stat"><div class="stat-icon">▶️</div><div><div class="stat-val">${wg}</div><div class="stat-label">${t('watching')}</div></div></div>
      <div class="stat"><div class="stat-icon">❤️</div><div><div class="stat-val">${f}</div><div class="stat-label">${t('favorites')}</div></div></div>
      <div class="stat"><div class="stat-icon">⭐</div><div><div class="stat-val">${a}</div><div class="stat-label">${t('avgRating')}</div></div></div>
    `;
  }
}

function getFiltered() {
  let d = [...getData()];
  if (search) d = d.filter(x => x.title.toLowerCase().includes(search) || (x.genre||'').toLowerCase().includes(search) || (x.notes||'').toLowerCase().includes(search));
  if (filter === 'watched') d = d.filter(x => x.status === 'watched');
  else if (filter === 'planning') d = d.filter(x => x.status === 'planning');
  else if (filter === 'watching') d = d.filter(x => x.status === 'watching');
  else if (filter === 'favorites') d = d.filter(x => x.favorite);
  if (genre !== 'all') d = d.filter(x => x.genre === genre);
  if (sort === 'newest') d.sort((a,b) => b.createdAt - a.createdAt);
  else if (sort === 'oldest') d.sort((a,b) => a.createdAt - b.createdAt);
  else if (sort === 'rating') d.sort((a,b) => b.rating - a.rating);
  else if (sort === 'alpha') d.sort((a,b) => a.title.localeCompare(b.title, lang));
  return d;
}

function renderGrid() {
  const f = getFiltered();
  const g = $(`#grid${cap(page)}`);
  const all = getData();
  
  if (!f.length) {
    const icons = { movies: '🎬', series: '🎞️', tvshows: '📺' };
    const emp = { movies: t('emptyM'), series: t('emptyS'), tvshows: t('emptyT') };
    g.innerHTML = `
      <div class="empty">
        <div class="empty-icon">${icons[page]}</div>
        <div class="empty-title">${all.length ? t('noRes') : emp[page]}</div>
        <div class="empty-text">${all.length ? t('tryAgain') : t('emptyH')}</div>
        ${!all.length ? `<button class="btn btn-gold" onclick="openAdd()">+ ${t('add')}</button>` : ''}
      </div>
    `;
    return;
  }
  
  g.innerHTML = f.map((x, i) => card(x, i)).join('');
}

function card(x, i) {
  const cls = page === 'series' ? 'series' : page === 'tvshows' ? 'tvshow' : '';
  const stCls = x.status === 'watched' ? 'badge-watched' : x.status === 'watching' ? 'badge-watching' : 'badge-planning';
  const stTxt = x.status === 'watched' ? t('sWatched') : x.status === 'watching' ? t('sWatching') : t('sPlanning');
  
  let extra = '';
  if (page === 'series' && x.parts) extra = `<span class="tag tag-parts">${x.parts} ${t('uParts')}</span>`;
  if (page === 'tvshows' && x.seasons) extra = `<span class="tag tag-seasons">${x.seasons} ${t('uSeasons')}</span>`;
  
  return `
    <article class="card ${cls}" style="animation-delay:${i*0.03}s">
      <div class="card-head">
        <h3 class="card-title" onclick="openDetail('${x.id}')">${esc(x.title)}</h3>
        <button class="fav-btn ${x.favorite?'on':''}" onclick="toggleFav('${x.id}')">${x.favorite?'❤️':'🤍'}</button>
      </div>
      <div class="card-meta">
        ${x.genre ? `<span class="tag tag-genre">${esc(x.genre)}</span>` : ''}
        ${x.year ? `<span class="card-year">${x.year}</span>` : ''}
        ${extra}
      </div>
      ${x.rating > 0 ? `<div class="card-rating"><span class="stars">${stars(x.rating)}</span><span class="rating-num">${x.rating}/10</span></div>` : ''}
      <div class="card-status"><span class="badge ${stCls}">${stTxt}</span></div>
      ${x.notes ? `<p class="card-notes">"${esc(x.notes)}"</p>` : ''}
      <div class="card-actions">
        <button class="btn btn-ghost" onclick="openEdit('${x.id}')">✏️ ${t('edit')}</button>
        <button class="btn btn-ghost" onclick="confirmDel('${x.id}')">🗑️ ${t('delete')}</button>
      </div>
    </article>
  `;
}

// Modals
function openModal(id) { $(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModals() { $$('.modal-wrap').forEach(m => m.classList.remove('open')); document.body.style.overflow = ''; }

function openAdd() {
  editId = null;
  const titles = { movies: t('newM'), series: t('newS'), tvshows: t('newT') };
  $('#formTitle').textContent = '✨ ' + titles[page];
  buildForm();
  $('#itemForm').reset();
  $('#ratingVal').textContent = '5';
  $('#ratingInput').value = 5;
  clearErr();
  openModal('#formModal');
  setTimeout(() => $('#titleInput').focus(), 100);
}

function openEdit(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  
  editId = id;
  const titles = { movies: t('editM'), series: t('editS'), tvshows: t('editT') };
  $('#formTitle').textContent = '✏️ ' + titles[page];
  buildForm();
  
  $('#titleInput').value = x.title;
  $('#genreInput').value = x.genre || '';
  $('#yearInput').value = x.year || '';
  $('#ratingInput').value = x.rating || 5;
  $('#ratingVal').textContent = x.rating || 5;
  $('#statusInput').value = x.status;
  $('#favInput').checked = x.favorite;
  $('#notesInput').value = x.notes || '';
  
  if (page === 'series') $('#partsInput').value = x.parts || '';
  if (page === 'tvshows') {
    $('#seasonsInput').value = x.seasons || '';
    $('#episodesInput').value = x.episodes || '';
  }
  
  clearErr();
  openModal('#formModal');
}

function buildForm() {
  const gOpts = `<option value="">${t('genre')}</option>` + G[lang].map(g => `<option value="${g}">${g}</option>`).join('');
  const sOpts = page === 'tvshows'
    ? `<option value="watched">✅ ${t('sWatched')}</option><option value="watching">▶️ ${t('sWatching')}</option><option value="planning">📋 ${t('sPlanning')}</option>`
    : `<option value="watched">✅ ${t('sWatched')}</option><option value="planning">📋 ${t('sPlanning')}</option>`;
  
  let html = `
    <div class="form-group">
      <label class="form-label">${t('title')} *</label>
      <input type="text" id="titleInput" class="form-input" maxlength="200">
      <div class="form-error" id="titleErr"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">${t('genre')}</label><select id="genreInput" class="form-select">${gOpts}</select></div>
      <div class="form-group"><label class="form-label">${t('year')}</label><input type="number" id="yearInput" class="form-input" min="1888" max="2099"></div>
    </div>
  `;
  
  if (page === 'series') {
    html += `<div class="form-group"><label class="form-label">${t('parts')} *</label><input type="number" id="partsInput" class="form-input" min="1" max="100"><div class="form-error" id="partsErr"></div></div>`;
  }
  
  if (page === 'tvshows') {
    html += `
      <div class="form-row">
        <div class="form-group"><label class="form-label">${t('seasons')}</label><input type="number" id="seasonsInput" class="form-input" min="1" max="100"></div>
        <div class="form-group"><label class="form-label">${t('episodes')}</label><input type="number" id="episodesInput" class="form-input" min="1" max="9999"></div>
      </div>
    `;
  }
  
  html += `
    <div class="form-group">
      <label class="form-label">${t('rating')}</label>
      <div class="rating-row"><input type="range" id="ratingInput" min="0" max="10" value="5"><span id="ratingVal" class="rating-val">5</span></div>
    </div>
    <div class="form-group"><label class="form-label">${t('status')}</label><select id="statusInput" class="form-select">${sOpts}</select></div>
    <div class="form-group"><label class="checkbox-row"><input type="checkbox" id="favInput"><span>❤️ ${t('fav')}</span></label></div>
    <div class="form-group"><label class="form-label">${t('notes')}</label><textarea id="notesInput" class="form-textarea" maxlength="1000"></textarea></div>
  `;
  
  $('#formBody').innerHTML = html;
  $('#ratingInput').oninput = e => $('#ratingVal').textContent = e.target.value;
  $('#saveBtn').textContent = '💾 ' + t('save');
  $('#cancelBtn').textContent = t('cancel');
}

function openDetail(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  
  const titles = { movies: t('detailM'), series: t('detailS'), tvshows: t('detailT') };
  const stCls = x.status === 'watched' ? 'badge-watched' : x.status === 'watching' ? 'badge-watching' : 'badge-planning';
  const stTxt = x.status === 'watched' ? t('sWatched') : x.status === 'watching' ? t('sWatching') : t('sPlanning');
  
  let extra = '';
  if (page === 'series' && x.parts) extra = `<div class="detail-item"><label>${t('parts')}</label><span>${x.parts} ${t('uParts')}</span></div>`;
  if (page === 'tvshows') {
    extra = `${x.seasons ? `<div class="detail-item"><label>${t('seasons')}</label><span>${x.seasons}</span></div>` : ''}${x.episodes ? `<div class="detail-item"><label>${t('episodes')}</label><span>${x.episodes}</span></div>` : ''}`;
  }
  
  $('#detailTitle').textContent = '🎬 ' + titles[page];
  $('#detailBody').innerHTML = `
    <h2 class="detail-title">${esc(x.title)}</h2>
    <div class="detail-badges"><span class="badge ${stCls}">${stTxt}</span>${x.favorite ? `<span class="badge badge-watched">❤️ ${t('favorites')}</span>` : ''}</div>
    <div class="detail-grid">
      ${x.genre ? `<div class="detail-item"><label>${t('genre')}</label><span>${esc(x.genre)}</span></div>` : ''}
      ${x.year ? `<div class="detail-item"><label>${t('year')}</label><span>${x.year}</span></div>` : ''}
      ${extra}
    </div>
    ${x.rating > 0 ? `<div class="detail-rating"><span class="detail-rating-num">${x.rating}<span class="detail-rating-max">/10</span></span><span class="detail-stars">${stars(x.rating)}</span></div>` : ''}
    ${x.notes ? `<div class="detail-notes">${esc(x.notes)}</div>` : ''}
    <div class="detail-item"><label>${t('added')}</label><span>${new Date(x.createdAt).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {year:'numeric',month:'long',day:'numeric'})}</span></div>
    <div class="detail-actions">
      <button class="btn btn-gold" onclick="closeModals();openEdit('${x.id}')">✏️ ${t('edit')}</button>
      <button class="btn btn-red" onclick="closeModals();confirmDel('${x.id}')">🗑️ ${t('delete')}</button>
    </div>
  `;
  openModal('#detailModal');
}

// CRUD
function handleSave() {
  clearErr();
  const title = $('#titleInput').value.trim();
  const genreVal = $('#genreInput').value;
  const year = $('#yearInput').value ? parseInt($('#yearInput').value) : null;
  const rating = parseInt($('#ratingInput').value);
  const status = $('#statusInput').value;
  const favorite = $('#favInput').checked;
  const notes = $('#notesInput').value.trim();
  
  if (!title) { showErr('titleErr', `${t('title')} ${t('req')}`); $('#titleInput').classList.add('err'); return; }
  
  const d = getData();
  if (d.find(x => x.title.toLowerCase() === title.toLowerCase() && x.id !== editId)) {
    showErr('titleErr', `"${title}" ${t('exists')}`);
    $('#titleInput').classList.add('err');
    return;
  }
  
  let parts = null;
  if (page === 'series') {
    parts = $('#partsInput').value ? parseInt($('#partsInput').value) : null;
    if (!parts) { showErr('partsErr', `${t('parts')} ${t('req')}`); $('#partsInput').classList.add('err'); return; }
  }
  
  let seasons = null, episodes = null;
  if (page === 'tvshows') {
    seasons = $('#seasonsInput').value ? parseInt($('#seasonsInput').value) : null;
    episodes = $('#episodesInput').value ? parseInt($('#episodesInput').value) : null;
  }
  
  const item = { id: editId || uid(), title, genre: genreVal, year, rating, status, favorite, notes, createdAt: editId ? d.find(x => x.id === editId).createdAt : Date.now(), updatedAt: Date.now() };
  if (page === 'series') item.parts = parts;
  if (page === 'tvshows') { item.seasons = seasons; item.episodes = episodes; }
  
  if (editId) {
    const i = d.findIndex(x => x.id === editId);
    if (i > -1) d[i] = item;
    toast(`"${title}" ${t('msgUpd')}`, 'success');
  } else {
    d.push(item);
    toast(`"${title}" ${t('msgAdd')}`, 'success');
  }
  
  saveData(d);
  closeModals();
  render();
}

function saveData(d) {
  if (page === 'movies') { movies = d; save('el5_movies', d); }
  else if (page === 'series') { series = d; save('el5_series', d); }
  else { tvshows = d; save('el5_tvshows', d); }
}

function toggleFav(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  x.favorite = !x.favorite;
  x.updatedAt = Date.now();
  saveData(d);
  render();
  toast(`"${x.title}" ${x.favorite ? t('msgFavOn') : t('msgFavOff')}`, 'info');
}

function confirmDel(id) {
  const d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  $('#confirmMsg').textContent = `${t('confirm')} "${x.title}"?`;
  $('#confirmYes').textContent = t('confirm');
  $('#confirmNo').textContent = t('cancel');
  $('#confirmYes').onclick = () => { delItem(id); closeModals(); };
  openModal('#confirmModal');
}

function delItem(id) {
  let d = getData();
  const x = d.find(i => i.id === id);
  if (!x) return;
  d = d.filter(i => i.id !== id);
  saveData(d);
  render();
  toast(`"${x.title}" ${t('msgDel')}`, 'error');
}

// Data
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
  toast(t('msgExp'), 'success');
}

function clearAll() {
  const n = movies.length + series.length + tvshows.length;
  if (!n) { toast(t('noData'), 'info'); closeSidebar(); return; }
  $('#confirmMsg').textContent = t('confirmClear');
  $('#confirmYes').textContent = t('confirm');
  $('#confirmNo').textContent = t('cancel');
  $('#confirmYes').onclick = () => {
    movies = []; series = []; tvshows = [];
    save('el5_movies', []); save('el5_series', []); save('el5_tvshows', []);
    closeModals(); closeSidebar(); render();
    toast(t('msgClr'), 'error');
  };
  closeSidebar();
  openModal('#confirmModal');
}

// Helpers
function showErr(id, msg) { const e = document.getElementById(id); if (e) { e.textContent = msg; e.classList.add('show'); } }
function clearErr() { $$('.form-error').forEach(e => e.classList.remove('show')); $$('.form-input.err').forEach(e => e.classList.remove('err')); }

function toast(msg, type = 'info') {
  const c = $('#toasts');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  t.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${esc(msg)}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.classList.add('hide'); setTimeout(() => t.remove(), 300); }, 3500);
}
