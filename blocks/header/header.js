import { cartApi } from '../../scripts/minicart/api.js';
// ===== START: Custom Modifications For Luma Bridge =====
import { bridgeApi } from '../../scripts/bridge/api.js';
// ===== END: Custom Modifications For Luma Bridge =====
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// ===== START: Custom Modifications For Luma Bridge =====
// Synchronize bridge authentication and refresh cart if required
await bridgeApi.synchronize();
// ===== END: Custom Modifications For Luma Bridge =====

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }

  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
    // collapse menu on focus lost
    nav.addEventListener('focusout', closeOnFocusLost);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
    nav.removeEventListener('focusout', closeOnFocusLost);
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  if (navSections) {
    navSections.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navSection) => {
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      navSection.addEventListener('click', () => {
        if (isDesktop.matches) {
          const expanded = navSection.getAttribute('aria-expanded') === 'true';
          toggleAllNavSections(navSections);
          navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        }
      });
    });
  }

  const navTools = nav.querySelector('.nav-tools');

  // Minicart
  const minicartButton = document.createRange().createContextualFragment(`<div class="minicart-wrapper">
    <button type="button" class="button nav-cart-button">0</button>
    <div></div>
  </div>`);
  navTools.append(minicartButton);
  navTools.querySelector('.nav-cart-button').addEventListener('click', () => {
    cartApi.toggleCart();
  });
  cartApi.cartItemsQuantity.watch((quantity) => {
    navTools.querySelector('.nav-cart-button').textContent = quantity;
  });

  // ===== START: Custom Modifications For Luma Bridge =====
  // Checkout bridge redirect
  const checkoutButton = document.createRange().createContextualFragment(`<div class="checkout-button-wrapper">
    <button type="button" class="nav-bridge-checkout-button">Checkout</button>
    <div></div>
  </div>`);
  navTools.append(checkoutButton);
  navTools.querySelector('.nav-bridge-checkout-button').addEventListener('click', () => {
    bridgeApi.redirect('checkout');
  });

  // Cart bridge redirect
  const cartButton = document.createRange().createContextualFragment(`<div class="cart-button-wrapper">
    <button type="button" class="nav-bridge-cart-button">Cart</button>
    <div></div>
  </div>`);
  navTools.append(cartButton);
  navTools.querySelector('.nav-bridge-cart-button').addEventListener('click', () => {
    bridgeApi.redirect('cart');
  });

  // Account buttons
  const logoutButton = document.createRange().createContextualFragment(`<div class="logout-button-wrapper">
    <button type="button" class="nav-bridge-logout-button">Logout</button>
    <div></div>
  </div>`);
  const loginButton = document.createRange().createContextualFragment(`<div class="login-button-wrapper">
    <button type="button" class="nav-bridge-login-button">Login</button>
    <div></div>
  </div>`);
  const accountButton = document.createRange().createContextualFragment(`<div class="account-button-wrapper">
    <button type="button" class="nav-bridge-account-button">Account</button>
    <div></div>
  </div>`);

  // Customer account redirects
  const authenticated = await bridgeApi.authenticated();
  if (authenticated) {
    navTools.append(accountButton, logoutButton);
    navTools.querySelector('.nav-bridge-account-button').addEventListener('click', () => {
      bridgeApi.redirect('account');
    });
    navTools.querySelector('.nav-bridge-logout-button').addEventListener('click', () => {
      bridgeApi.redirect('account-logout');
    });
  } else {
    navTools.append(loginButton);
    navTools.querySelector('.nav-bridge-login-button').addEventListener('click', () => {
      bridgeApi.redirect('account-login');
    });
  }
  // ===== END: Custom Modifications For Luma Bridge =====
  // Search
  const searchInput = document.createRange().createContextualFragment(`<div class="nav-search-input hidden">
      <form id="search_mini_form" action="/search" method="GET">
        <input id="search" type="search" name="q" placeholder="Search" />
        <div id="search_autocomplete" class="search-autocomplete"></div>
      </form>
    </div>`);
  document.body.querySelector('header').append(searchInput);

  const searchButton = document.createRange().createContextualFragment('<button type="button" class="button nav-search-button">Search</button>');
  navTools.append(searchButton);
  navTools.querySelector('.nav-search-button').addEventListener('click', async () => {
    await import('./searchbar.js');
    document.querySelector('header .nav-search-input').classList.toggle('hidden');
  });

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  // prevent mobile nav behavior on window resize
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}
