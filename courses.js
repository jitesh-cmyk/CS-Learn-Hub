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

const courseCards = document.querySelectorAll(".course-card");

const categoryItems = document.querySelectorAll(".course");
const levelCheckboxes = document.querySelectorAll(".level input");

let selectedCategory = "all";
let selectedLevel = "all";


// Category Click Filter

categoryItems.forEach(item => {

    item.addEventListener("click", () => {

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

        else if(text.includes("data")){
            selectedCategory = "datastructure";
        }


        filterCourses();

    });

});



// Level Filter

levelCheckboxes.forEach(box => {


    box.addEventListener("change",()=>{


        selectedLevel = "all";


        levelCheckboxes.forEach(check=>{

            if(check.checked){

                let value = check.parentElement.innerText.toLowerCase();


                if(value.includes("beginner")){
                    selectedLevel="beginner";
                }


                if(value.includes("intermediate")){
                    selectedLevel="intermediate";
                }


                if(value.includes("advanced")){
                    selectedLevel="advanced";
                }

            }

        });


        filterCourses();


    });


});



// Main Filter Function


function filterCourses(){


    courseCards.forEach(card=>{


        let category = card.dataset.category;
        let level = card.dataset.level;



        let categoryMatch =
        selectedCategory==="all" ||
        category===selectedCategory;



        let levelMatch =
        selectedLevel==="all" ||
        level===selectedLevel;



        if(categoryMatch && levelMatch){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }
        



    });
   

  }