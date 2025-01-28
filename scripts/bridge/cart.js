import { auth } from '../auth/api.js';

/**
 * Unique cookie, can be replaced with a configuration
 * @type {string}
 */
const cookieCartData = 'eds_bridge_cart_data';

/**
 * Delete a cookie by key, domain, and path.
 * @param {string} key The cookie key to delete
 * @param {string} [domain=`.${window.location.hostname}`] The domain for the cookie
 * @param {string} [path='/'] The path for the cookie
 */
export function deleteCookie(key, domain = `.${window.location.hostname}`, path = '/') {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${domain}; path=${path}; SameSite=Lax`;
}

// Function to serialize the cart for transmission
export function serializeCart(cart) {
  return JSON.stringify({
    items: cart.items.map((item) => ({
      sku: item.product.sku,
      qty: item.quantity,
    })),
    summary_count: cart.total_quantity,
  });
}

/**
 * Set the cart cookie if the cart has changed.
 * If the cart ID is null or undefined, the cookie is removed.
 * @param {string|null} cartData Cart Data
 * @returns {Promise<boolean>}
 */
export async function setCartCookieIfChanged(cartData) {
  const cartDataJson = serializeCart(cartData);
  const currentCookie = auth.getCookie(cookieCartData);
  let refresh = false;

  // Only update the cookie if the cart ID has changed
  if (cartDataJson !== currentCookie) {
    if (cartDataJson) {
      // Set the new cart data in the cookie
      auth.setCookie(cookieCartData, cartDataJson);
    } else {
      // Remove the cookie if is null or undefined
      deleteCookie(cookieCartData);
    }
    refresh = true;
  }
  return refresh;
}

/**
 * Reset the cart cookie to null.
 * This should be called when the cart is reset (e.g., after an order is placed).
 * @returns {Promise<void>}
 */
export async function resetCartCookie() {
  // Remove the cart cookie
  deleteCookie(cookieCartData);
}
