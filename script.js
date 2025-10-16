// Section switching functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');
const sidebar = document.querySelector('.sidebar');
const mobileToggle = document.querySelector('.mobile-toggle');
const previewBox = document.getElementById('previewBox');
const navItems = document.querySelectorAll('.nav-item');

// Toggle submenu
navItems.forEach(item => {
  const link = item.querySelector('.nav-link');
  link.addEventListener('click', e => {
    // Don't prevent default for section switching
    // Just toggle the submenu
    const isOpen = item.classList.contains('open');

    // Close all other submenus
    navItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
      }
    });

    // Toggle current submenu
    item.classList.toggle('open', !isOpen);
  });
});

// Submenu links - scroll to card when clicked
document.querySelectorAll('.submenu-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').substring(1);
    const cardId = link.getAttribute('data-card');

    // Switch to the section first
    switchSection(sectionId);

    // Then scroll to the specific card if data-card exists
    if (cardId) {
      setTimeout(() => {
        const targetCard = document.getElementById(`card-${cardId}`);
        if (targetCard) {
          const mainContent = document.querySelector('.main-content');
          const cardTop = targetCard.offsetTop;
          const offset = 20; // offset from top

          if (mainContent) {
            mainContent.scrollTo({
              top: cardTop - offset,
              behavior: 'smooth',
            });
          }

          // Highlight the card briefly
          targetCard.classList.add('card-highlight');
          setTimeout(() => {
            targetCard.classList.remove('card-highlight');
          }, 2000);
        }
      }, 100); // Wait for section to switch
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
});

// Function to switch sections
function switchSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.scrollTop = 0;
  }
}

// Add click event to nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sectionId = link.getAttribute('data-section');
    switchSection(sectionId);
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
});

// Mobile toggle
mobileToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', e => {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
      sidebar.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  }
});

// Interactive CSS Input and Live Preview
let currentProperty = null;
let currentCSS = '';

// Handle Apply button clicks
document.addEventListener('click', e => {
  if (e.target.classList.contains('apply-btn')) {
    const card = e.target.closest('.card');
    const cssInput = card.querySelector('.css-input');
    const property = card.getAttribute('data-property');

    if (cssInput && property) {
      currentProperty = property;
      currentCSS = cssInput.value.trim();

      // Highlight active card
      document
        .querySelectorAll('.card')
        .forEach(c => c.classList.remove('card-active'));
      card.classList.add('card-active');

      // Update preview
      updateLivePreview(property, currentCSS);
    }
  }
});

// Auto-update on input (real-time)
document.addEventListener('input', e => {
  if (e.target.classList.contains('css-input')) {
    const card = e.target.closest('.card');
    const property = card.getAttribute('data-property');

    if (card.classList.contains('card-active')) {
      currentProperty = property;
      currentCSS = e.target.value.trim();
      updateLivePreview(property, currentCSS);
    }
  }
});

// Click card to activate
document.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (
    card &&
    card.hasAttribute('data-property') &&
    !e.target.classList.contains('apply-btn')
  ) {
    const cssInput = card.querySelector('.css-input');
    const property = card.getAttribute('data-property');

    if (cssInput && property) {
      currentProperty = property;
      currentCSS = cssInput.value.trim();

      document
        .querySelectorAll('.card')
        .forEach(c => c.classList.remove('card-active'));
      card.classList.add('card-active');

      updateLivePreview(property, currentCSS);
    }
  }
});

function updateLivePreview(property, cssText) {
  previewBox.innerHTML = '';

  const previewDemo = document.createElement('div');
  previewDemo.className = 'preview-demo';

  const title = document.createElement('h4');
  title.textContent = property
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  previewDemo.appendChild(title);

  const demoBox = document.createElement('div');
  demoBox.className = 'demo-element';
  demoBox.textContent =
    'Sample Text - The quick brown fox jumps over the lazy dog';

  // Apply CSS
  try {
    // Parse CSS and apply to demo element
    const cssLines = cssText.split(';').filter(line => line.trim());
    cssLines.forEach(line => {
      const [prop, value] = line.split(':').map(s => s.trim());
      if (prop && value) {
        demoBox.style[prop.replace(/-([a-z])/g, g => g[1].toUpperCase())] =
          value;
      }
    });

    // Add default styles for better visibility
    if (!property.includes('width')) demoBox.style.minWidth = '200px';
    if (!property.includes('height')) demoBox.style.minHeight = '100px';
    if (!property.includes('padding')) demoBox.style.padding = '20px';
    if (!property.includes('background') && !property.includes('color')) {
      demoBox.style.backgroundColor = '#f0f9ff';
    }
    if (!property.includes('color') && !property.includes('background')) {
      demoBox.style.color = '#1e293b';
    }
    if (!property.includes('border') && !property.includes('box-shadow')) {
      demoBox.style.border = '1px solid #e2e8f0';
    }

    // Special handling for background-image
    if (property.includes('background-image')) {
      demoBox.style.backgroundRepeat = 'no-repeat';
      demoBox.style.backgroundPosition = 'center';
      demoBox.style.backgroundSize = 'cover';
    }
  } catch (error) {
    console.error('CSS parse error:', error);
    demoBox.textContent = '⚠️ Invalid CSS';
    demoBox.style.color = '#ef4444';
  }

  previewDemo.appendChild(demoBox);

  // Add CSS code display
  const codeDisplay = document.createElement('div');
  codeDisplay.className = 'preview-code';
  codeDisplay.innerHTML = `<pre><code>${cssText}</code></pre>`;
  previewDemo.appendChild(codeDisplay);

  previewBox.appendChild(previewDemo);
}

// Handle keyboard navigation
navLinks.forEach((link, index) => {
  link.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextLink = navLinks[index + 1];
      if (nextLink) nextLink.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevLink = navLinks[index - 1];
      if (prevLink) prevLink.focus();
    }
  });
});

// Initial preview
previewBox.innerHTML = `
  <div class="preview-placeholder">
    <span class="preview-icon">▶</span>
    <p>Click any card or press "Apply" to see the live preview</p>
    <p class="preview-hint">Try editing the CSS input and see instant results!</p>
  </div>
`;
