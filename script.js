// ===== AUTH STATE =====
const API = 'http://localhost:5000/api';

function checkAuthState() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const loginBtn = document.getElementById('loginBtn');
  const userMenu = document.getElementById('userMenu');
  const userNameDisplay = document.getElementById('userNameDisplay');
  if (user && loginBtn && userMenu) {
    loginBtn.style.display = 'none';
    userMenu.style.display = 'block';
    userNameDisplay.textContent = user.firstName || user.email.split('@')[0];
  }
}

function handleLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.reload();
}

const userMenuBtn = document.getElementById('userMenuBtn');
const userDropdown = document.getElementById('userDropdown');
if (userMenuBtn) {
  userMenuBtn.addEventListener('click', () => {
    userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
  });
  document.addEventListener('click', e => {
    if (!userMenuBtn.contains(e.target)) userDropdown.style.display = 'none';
  });
}

checkAuthState();

// ===== PROPERTY DATA =====
const trendingProps = [
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', badge: 'For Sale', price: '₹1.2 Cr', loc: 'Bopal, Ahmedabad', title: 'Luxurious 3BHK Villa with Garden', beds: 3, baths: 2, sqft: '1850', agent: 'RK', agentName: 'Rahul K.' },
  { img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80', badge: 'New Launch', badgeClass: 'new', price: '₹85 L', loc: 'Giftcity, Gandhinagar', title: 'Premium 2BHK Smart Apartment', beds: 2, baths: 2, sqft: '1200', agent: 'PS', agentName: 'Priya S.' },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', badge: 'For Sale', price: '₹2.5 Cr', loc: 'Prahlad Nagar, Ahmedabad', title: 'Ultra-Modern 4BHK Penthouse', beds: 4, baths: 3, sqft: '3200', agent: 'AM', agentName: 'Amit M.' },
  { img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80', badge: 'For Rent', badgeClass: 'rent', price: '₹35K/mo', loc: 'Satellite, Ahmedabad', title: 'Spacious 3BHK Semi-Furnished Flat', beds: 3, baths: 2, sqft: '1650', agent: 'NK', agentName: 'Neha K.' },
  { img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', badge: 'For Sale', price: '₹1.8 Cr', loc: 'Thaltej, Ahmedabad', title: 'Elegant 3BHK Row House', beds: 3, baths: 3, sqft: '2100', agent: 'VD', agentName: 'Vijay D.' },
  { img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80', badge: 'New Launch', badgeClass: 'new', price: '₹65 L', loc: 'Memnagar, Ahmedabad', title: 'Affordable 2BHK Apartment', beds: 2, baths: 1, sqft: '980', agent: 'SJ', agentName: 'Sonal J.' }
];

const residentialProps = [
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', badge: 'For Sale', price: '₹95 L', loc: 'Shela, Ahmedabad', title: 'Modern 3BHK Apartment Complex', beds: 3, baths: 2, sqft: '1550', agent: 'AK', agentName: 'Ankit K.' },
  { img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80', badge: 'For Sale', price: '₹1.4 Cr', loc: 'Vastrapur, Ahmedabad', title: 'Luxury 4BHK Duplex Villa', beds: 4, baths: 4, sqft: '2800', agent: 'MR', agentName: 'Meera R.' },
  { img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80', badge: 'For Rent', badgeClass: 'rent', price: '₹22K/mo', loc: 'Navrangpura, Ahmedabad', title: 'Cozy 2BHK Furnished Apartment', beds: 2, baths: 1, sqft: '1050', agent: 'DP', agentName: 'Dhruv P.' },
  { img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80', badge: 'New Launch', badgeClass: 'new', price: '₹72 L', loc: 'Chandkheda, Ahmedabad', title: 'Affordable 2BHK Gated Society', beds: 2, baths: 2, sqft: '1100', agent: 'HB', agentName: 'Hiral B.' },
  { img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&q=80', badge: 'For Sale', price: '₹3.2 Cr', loc: 'Bodakdev, Ahmedabad', title: 'Premium 5BHK Bungalow', beds: 5, baths: 5, sqft: '4500', agent: 'JM', agentName: 'Jay M.' }
];

const commercialProps = [
  { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', badge: 'For Sale', price: '₹2.8 Cr', loc: 'Prahlad Nagar, Ahmedabad', title: 'Premium Office Space – 3500 sqft', beds: null, baths: null, sqft: '3500', agent: 'RS', agentName: 'Raj S.', type: 'office' },
  { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', badge: 'For Rent', badgeClass: 'rent', price: '₹1.2L/mo', loc: 'SG Highway, Ahmedabad', title: 'Corporate Office Floor – 5000 sqft', beds: null, baths: null, sqft: '5000', agent: 'KP', agentName: 'Kiran P.', type: 'office' },
  { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', badge: 'For Sale', price: '₹85 L', loc: 'CG Road, Ahmedabad', title: 'Retail Shop in Prime Location', beds: null, baths: null, sqft: '650', agent: 'BT', agentName: 'Bhavesh T.', type: 'shop' },
  { img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', badge: 'New Launch', badgeClass: 'new', price: '₹1.5 Cr', loc: 'Giftcity, Gandhinagar', title: 'GIFT City Office Suite – 2200 sqft', beds: null, baths: null, sqft: '2200', agent: 'NV', agentName: 'Neel V.', type: 'office' },
  { img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80', badge: 'For Rent', badgeClass: 'rent', price: '₹45K/mo', loc: 'Iscon, Ahmedabad', title: 'Showroom Space – 1800 sqft', beds: null, baths: null, sqft: '1800', agent: 'SM', agentName: 'Sanjay M.', type: 'shop' }
];

// ===== RENDER CARD =====
function createCard(p) {
  const specs = p.beds !== null
    ? `<div class="cs"><i class="fa-solid fa-bed"></i>${p.beds} Beds</div>
       <div class="cs"><i class="fa-solid fa-bath"></i>${p.baths} Baths</div>
       <div class="cs"><i class="fa-solid fa-vector-square"></i>${p.sqft} sqft</div>`
    : `<div class="cs"><i class="fa-solid fa-vector-square"></i>${p.sqft} sqft</div>
       <div class="cs"><i class="fa-solid fa-building"></i>${p.type || 'Commercial'}</div>`;
  return `
    <div class="prop-card">
      <div class="card-img">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <span class="card-badge ${p.badgeClass || ''}">${p.badge}</span>
        <button class="card-fav" onclick="toggleFav(this)"><i class="fa-regular fa-heart"></i></button>
        <div class="card-price"><span>${p.price}</span></div>
      </div>
      <div class="card-body">
        <div class="card-loc"><i class="fa-solid fa-location-dot"></i>${p.loc}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-specs">${specs}</div>
        <div class="card-footer">
          <div class="card-agent">
            <div class="agent-av">${p.agent}</div>
            <span class="agent-name">${p.agentName}</span>
          </div>
          <button class="btn-offer">Get Offer</button>
        </div>
      </div>
    </div>`;
}

// ===== INJECT CARDS =====
document.getElementById('trendingGrid').innerHTML = trendingProps.map(createCard).join('');
document.getElementById('resSlider').innerHTML = residentialProps.map(createCard).join('');
document.getElementById('comSlider').innerHTML = commercialProps.map(createCard).join('');

// ===== PROPERTY SLIDER =====
function initSlider(sliderId, prevId, nextId) {
  const slider = document.getElementById(sliderId);
  let pos = 0;
  const cardW = () => slider.querySelector('.prop-card').offsetWidth + 24;
  const maxPos = () => -(slider.children.length - Math.floor(slider.parentElement.offsetWidth / cardW())) * cardW();
  document.getElementById(nextId).addEventListener('click', () => {
    pos = Math.max(pos - cardW(), maxPos());
    slider.style.transform = `translateX(${pos}px)`;
  });
  document.getElementById(prevId).addEventListener('click', () => {
    pos = Math.min(pos + cardW(), 0);
    slider.style.transform = `translateX(${pos}px)`;
  });
}
initSlider('resSlider', 'resPrev', 'resNext');
initSlider('comSlider', 'comPrev', 'comNext');

// ===== HERO BG SLIDER =====
const heroSlides = document.querySelectorAll('.hero-slide');
let heroCurrent = 0;
setInterval(() => {
  heroSlides[heroCurrent].classList.remove('active');
  heroCurrent = (heroCurrent + 1) % heroSlides.length;
  heroSlides[heroCurrent].classList.add('active');
}, 4000);

// ===== STATS COUNTER =====
function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = Math.floor(start).toLocaleString() + el.dataset.suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.snum').forEach(el => {
        animateCounter(el, el.dataset.target, 3500);
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.stats-bar') || document.querySelector('.stats-inner');
if (statsEl) statsObserver.observe(statsEl);

// ===== STICKY HEADER =====
window.addEventListener('scroll', () => {
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});

// ===== BACK TO TOP =====
document.getElementById('backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== HAMBURGER =====
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// ===== SEARCH TABS =====
document.querySelectorAll('.stab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== FAVORITES =====
let favCount = 0;
function toggleFav(btn) {
  const icon = btn.querySelector('i');
  const isActive = btn.classList.toggle('active');
  icon.className = isActive ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  favCount += isActive ? 1 : -1;
  document.querySelector('.fav-count').textContent = favCount;
}

// ===== GIFT POPUP =====
const giftPopup = document.getElementById('giftPopup');
document.getElementById('giftBtn').addEventListener('click', () => giftPopup.classList.toggle('open'));
document.getElementById('giftPopupClose').addEventListener('click', e => { e.stopPropagation(); giftPopup.classList.remove('open'); });

let totalSecs = 23 * 3600 + 59 * 60 + 47;
function updateCountdown() {
  const h = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
  const s = String(totalSecs % 60).padStart(2, '0');
  const el = document.getElementById('giftCountdown');
  if (el) el.textContent = h + ':' + m + ':' + s;
  if (totalSecs > 0) totalSecs--;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== REGISTER AUTO POPUP =====
let isRegistered = !!localStorage.getItem('token');

let autoCloseTimer = null;
let repeatTimer = null;

function openRegisterPopup() {
  if (isRegistered) return;
  const overlay = document.getElementById('authOverlay');
  overlay.classList.add('open');
  document.querySelectorAll('.atab').forEach(b => b.classList.toggle('active', b.dataset.tab === 'register'));
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
  // Auto close after 5 sec, then repeat after 30 sec
  clearTimeout(autoCloseTimer);
  clearTimeout(repeatTimer);
  autoCloseTimer = setTimeout(() => {
    overlay.classList.remove('open');
    if (!isRegistered) repeatTimer = setTimeout(openRegisterPopup, 30000);
  }, 5000);
}

setTimeout(openRegisterPopup, 3000);

let lastScrollPopup = 0;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  const now = Date.now();
  if (scrolled > 0.4 && now - lastScrollPopup > 15000) {
    lastScrollPopup = now;
    openRegisterPopup();
  }
});

document.addEventListener('mouseleave', e => { if (e.clientY < 10) openRegisterPopup(); });

// ===== AUTH MODAL =====
const authOverlay = document.getElementById('authOverlay');

function closeAuthOverlay() {
  clearTimeout(autoCloseTimer);
  clearTimeout(repeatTimer);
  authOverlay.classList.remove('open');
}

document.getElementById('authClose').addEventListener('click', closeAuthOverlay);
authOverlay.addEventListener('click', e => { if (e.target === authOverlay) closeAuthOverlay(); });

document.querySelectorAll('.atab').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  document.querySelectorAll('.atab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('loginForm').classList.toggle('hidden', tab !== 'login');
  document.getElementById('registerForm').classList.toggle('hidden', tab !== 'register');
}

function togglePass(id, btn) {
  const inp = document.getElementById(id);
  const isText = inp.type === 'text';
  inp.type = isText ? 'password' : 'text';
  btn.querySelector('i').className = isText ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
}

function showToast(msg) {
  let t = document.querySelector('.auth-toast');
  if (!t) { t = document.createElement('div'); t.className = 'auth-toast'; document.body.appendChild(t); }
  t.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-auth');
  const email = e.target.querySelector('input[type="email"]').value;
  const password = document.getElementById('loginPass').value;
  btn.textContent = 'Logging in...';
  btn.disabled = true;
  try {
    const res = await fetch(`${API}/auth/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email, password}) });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('showWelcome', 'login');
      window.location.reload();
    } else {
      alert(data.message || 'Login failed');
      btn.innerHTML = 'Login to Account <i class="fa-solid fa-arrow-right"></i>';
      btn.disabled = false;
    }
  } catch {
    alert('Server error. Make sure backend is running.');
    btn.innerHTML = 'Login to Account <i class="fa-solid fa-arrow-right"></i>';
    btn.disabled = false;
  }
});

document.getElementById('registerForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-auth');
  const inputs = e.target.querySelectorAll('input, select');
  const firstName = inputs[0].value.trim();
  const lastName  = inputs[1].value.trim();
  const phone     = inputs[2].value.trim();
  const email     = inputs[3].value.trim();
  const role      = inputs[4].value;
  const city      = inputs[5].value;
  const password  = document.getElementById('regPass').value;
  btn.textContent = 'Creating Account...';
  btn.disabled = true;
  try {
    const res = await fetch(`${API}/auth/register`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({firstName, lastName, email, password, phone, role, city}) });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('showWelcome', 'register');
      isRegistered = true;
      window.location.reload();
    } else {
      alert(data.message || 'Registration failed');
      btn.innerHTML = 'Create Free Account <i class="fa-solid fa-arrow-right"></i>';
      btn.disabled = false;
    }
  } catch {
    alert('Server error. Make sure backend is running.');
    btn.innerHTML = 'Create Free Account <i class="fa-solid fa-arrow-right"></i>';
    btn.disabled = false;
  }
});

// ===== INQUIRY MODAL =====
const inqOverlay = document.getElementById('inqOverlay');

document.querySelector('.btn-inquiry').addEventListener('click', () => {
  document.getElementById('inqForm').style.display = 'flex';
  document.querySelector('.inq-header').style.display = 'block';
  document.getElementById('inqSuccess').classList.remove('show');
  inqOverlay.classList.add('open');
});

document.getElementById('inqClose').addEventListener('click', () => inqOverlay.classList.remove('open'));
inqOverlay.addEventListener('click', e => { if (e.target === inqOverlay) inqOverlay.classList.remove('open'); });

document.getElementById('inqForm').addEventListener('submit', e => {
  e.preventDefault();
  const refId = 'CRS-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('inqRefId').textContent = refId;
  document.getElementById('inqForm').style.display = 'none';
  document.querySelector('.inq-header').style.display = 'none';
  document.getElementById('inqSuccess').classList.add('show');
});

document.getElementById('inqSuccessClose').addEventListener('click', () => inqOverlay.classList.remove('open'));

// ===== NAV DROPDOWN MOBILE =====
document.querySelectorAll('.nav-drop-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      btn.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// ===== NAV CLOSE ON LINK CLICK =====
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('nav').classList.remove('open'));
});
