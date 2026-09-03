const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const languageToggleButton = document.getElementById('toggle-language-btn');
const languageCards = document.getElementById('language-cards');
const authButton = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');
const searchForm = document.getElementById('course-search-form');
const searchInput = document.getElementById('course-search');
const sidebarSearchInput = document.getElementById('sidebar-course-search');
const sidebarSearchButton = document.getElementById('sidebar-search-button');
const authStatus = document.createElement('p');

authStatus.className = 'auth-help';
authStatus.style.display = 'none';
if (authForm) {
  authForm.appendChild(authStatus);
}

if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

if (themeToggle) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  const updateThemeButton = () => {
    const isLight = document.body.classList.contains('light-theme');
    const icon = themeToggle.querySelector('i');

    if (icon) {
      icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }

    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  };

  updateThemeButton();

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeButton();
  });
}

if (languageToggleButton && languageCards) {
  languageToggleButton.addEventListener('click', () => {
    const isExpanded = languageCards.classList.toggle('expanded');
    languageCards.classList.toggle('collapsed', !isExpanded);
    languageCards.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const updateAuthButton = (userEmail = '') => {
  if (authButton) {
    authButton.textContent = userEmail ? 'Sign Out' : 'Sign In';
    authButton.setAttribute('aria-label', userEmail ? 'Sign out' : 'Sign in');
  }
};

const showAuthStatus = (message, isError = false) => {
  if (!authStatus) return;

  authStatus.textContent = message;
  authStatus.style.display = 'block';
  authStatus.style.color = isError ? 'var(--accent)' : 'var(--muted)';
};

const getStoredToken = () => localStorage.getItem('csLearnToken');

const fetchCurrentUser = async () => {
  const token = getStoredToken();
  if (!token) {
    updateAuthButton();
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) {
      localStorage.removeItem('csLearnToken');
      localStorage.removeItem('csLearnUser');
      updateAuthButton();
      return;
    }

    const data = await response.json();
    if (data.success && data.user?.email) {
      localStorage.setItem('csLearnUser', data.user.email);
      updateAuthButton(data.user.email);
    }
  } catch (error) {
    console.error('Failed to fetch current user:', error);
  }
};

const openAuthModal = () => {
  if (authModal) {
    authModal.classList.add('open');
    authModal.setAttribute('aria-hidden', 'false');
    authEmail?.focus();
  }
};

const closeAuthModal = () => {
  if (authModal) {
    authModal.classList.remove('open');
    authModal.setAttribute('aria-hidden', 'true');
  }

  if (authForm) {
    authForm.reset();
  }
};

if (authButton) {
  authButton.addEventListener('click', async () => {
    const userEmail = localStorage.getItem('csLearnUser');

    if (userEmail) {
      const token = getStoredToken();
      if (token) {
        await fetch('http://localhost:3000/api/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      localStorage.removeItem('csLearnToken');
      localStorage.removeItem('csLearnUser');
      updateAuthButton();
      showAuthStatus('You have been signed out.');
      return;
    }

    openAuthModal();
  });
}

if (authClose) {
  authClose.addEventListener('click', closeAuthModal);
}

if (authModal) {
  authModal.addEventListener('click', (event) => {
    if (event.target === authModal) {
      closeAuthModal();
    }
  });
}

if (authForm) {
  authForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = authEmail?.value.trim();
    const password = authPassword?.value.trim();

    if (!email || !password) {
      showAuthStatus('Please enter both email and password.', true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        showAuthStatus(data.message || 'Sign-in failed.', true);
        return;
      }

      localStorage.setItem('csLearnToken', data.token);
      localStorage.setItem('csLearnUser', data.user.email);
      updateAuthButton(data.user.email);
      showAuthStatus(`Welcome back, ${data.user.email}!`);
      closeAuthModal();
    } catch (error) {
      console.error('Login request failed:', error);
      showAuthStatus('Unable to reach the authentication server.', true);
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && authModal?.classList.contains('open')) {
    closeAuthModal();
  }
});

updateAuthButton();
fetchCurrentUser();
// ===============================
// COURSE FILTER SYSTEM
// Category + Level Search
// ===============================

const courseCards = document.querySelectorAll('.course-card');
const categoryItems = document.querySelectorAll('.course');
const levelCheckboxes = document.querySelectorAll('.level input');
const courseGrid = document.querySelector('.course-grid');
const resultMessage = document.createElement('p');
resultMessage.className = 'course-result-message';
courseGrid?.before(resultMessage);

let selectedCategory = 'all';
let selectedLevels = [];
let selectedSearch = '';


// Category Click Filter

categoryItems.forEach(item => {
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');

  const selectCategory = () => {

        const text = item.innerText.toLowerCase();

        if(text.includes("all courses")){
            selectedCategory = "all";
        }

        else if(text.includes("programming")){
            selectedCategory = "programming";
        }

        else if(text.includes("core")){
            selectedCategory = "core";
        }

        else if(text.includes("web")){
            selectedCategory = "web";
        }

        else if(text.includes("data structure")){
            selectedCategory = "datastructure";
        }

        categoryItems.forEach(categoryItem => categoryItem.classList.toggle('active', categoryItem === item));
        filterCourses();
      };

      item.addEventListener('click', selectCategory);
      item.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectCategory();
        }
      });

});



// Level Filter

levelCheckboxes.forEach(box => {


    box.addEventListener("change",()=>{


        selectedLevels = [...levelCheckboxes]
          .filter(check => check.checked)
          .map(check => check.parentElement.innerText.toLowerCase())
          .map(value => value.includes('beginner') ? 'beginner' : value.includes('intermediate') ? 'intermediate' : 'advanced');
        filterCourses();


    });


});



// Main Filter Function


function filterCourses(){
  const normalizedSearch = selectedSearch.trim().toLowerCase();
  let visibleCount = 0;

  courseCards.forEach(card => {
    const categoryMatch = selectedCategory === 'all' || card.dataset.category === selectedCategory;
    const levelMatch = !selectedLevels.length || selectedLevels.includes(card.dataset.level);
    const cardText = `${card.querySelector('h3')?.textContent || ''} ${card.querySelector('p')?.textContent || ''}`.toLowerCase();
    const searchMatch = !normalizedSearch || cardText.includes(normalizedSearch);
    const isVisible = categoryMatch && levelMatch && searchMatch;
    card.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount += 1;
  });

  const hasFilters = normalizedSearch || selectedCategory !== 'all' || selectedLevels.length;
  resultMessage.textContent = hasFilters && visibleCount
    ? `${visibleCount} course${visibleCount === 1 ? '' : 's'} found`
    : visibleCount ? '' : 'No courses match your search. Try another keyword or filter.';
  resultMessage.classList.toggle('is-empty', visibleCount === 0);
}

const applySearch = value => {
  selectedSearch = value;
  if (searchInput && searchInput.value !== value) searchInput.value = value;
  if (sidebarSearchInput && sidebarSearchInput.value !== value) sidebarSearchInput.value = value;
  filterCourses();
};

searchForm?.addEventListener('submit', event => {
  event.preventDefault();
  applySearch(searchInput.value);
  document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
searchInput?.addEventListener('input', event => applySearch(event.target.value));
sidebarSearchInput?.addEventListener('input', event => applySearch(event.target.value));
sidebarSearchButton?.addEventListener('click', () => applySearch(sidebarSearchInput.value));

const showCourseDetails = card => {
  const title = card.querySelector('h3')?.textContent.trim() || 'Course';
  const description = card.querySelector('p')?.textContent.trim() || 'Course details';
  const level = card.dataset.level ? `${card.dataset.level[0].toUpperCase()}${card.dataset.level.slice(1)}` : '';
  const dialog = document.createElement('div');
  dialog.className = 'course-dialog';
  dialog.innerHTML = `<div class="course-dialog-box" role="dialog" aria-modal="true" aria-labelledby="course-dialog-title"><button type="button" class="course-dialog-close" aria-label="Close">&times;</button><h2 id="course-dialog-title">${title}</h2><p>${description}</p><strong>${level} level</strong><button type="button" class="course-dialog-ok">Got it</button></div>`;
  document.body.appendChild(dialog);
  const close = () => dialog.remove();
  dialog.addEventListener('click', event => {
    if (event.target === dialog || event.target.closest('.course-dialog-close, .course-dialog-ok')) close();
  });
};

courseCards.forEach(card => {
  const action = card.querySelector('a[href="#"]') || [...card.querySelectorAll('button')].find(button => !button.closest('a'));
  action?.addEventListener('click', event => {
    event.preventDefault();
    showCourseDetails(card);
  });
});

categoryItems[0]?.classList.add('active');
filterCourses();