// camping.js - Playful enhancements coming soon!
console.log('Welcome to the Grover Hot Springs Camping Trip site! 🏕️');

// Map modal logic
const mapLink = document.getElementById('mapLink');
const mapModal = document.getElementById('mapModal');
const closeMapModal = document.getElementById('closeMapModal');

function openMapModal(e) {
  e.preventDefault();
  mapModal.classList.add('show');
  mapModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

if (mapLink && mapModal && closeMapModal) {
  mapLink.addEventListener('click', openMapModal);
  closeMapModal.addEventListener('click', function() {
    mapModal.classList.remove('show');
    mapModal.style.display = 'none';
    document.body.style.overflow = '';
  });
  mapModal.addEventListener('click', function(e) {
    if (e.target === mapModal) {
      mapModal.classList.remove('show');
      mapModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mapModal.classList.contains('show')) {
      mapModal.classList.remove('show');
      mapModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  // Add event listeners to all .map-popup-link elements
  document.querySelectorAll('.map-popup-link').forEach(function(link) {
    link.addEventListener('click', openMapModal);
  });
}

// Dark mode toggle logic
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;

// Load preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  if (darkModeSwitch) darkModeSwitch.checked = true;
}
if (darkModeSwitch) {
  darkModeSwitch.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });
} 