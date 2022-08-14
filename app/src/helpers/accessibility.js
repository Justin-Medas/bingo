/**
 * @file
 * Accessibility Functions.
 * Helper functions to improve interactive accessibility
 */
/**
   * Set the tabindex attributes correctly for accessibility.
   *
   * @param {HTMLElement} target
   *   The target to set tabindexes on.
   *
   * @param {Boolean} focusable
   *   The target to set tabindexes and aria-hidden values on.
   */
export function tabindexAccessibility(
  target,
  focusable
) {
  // Collect an array of focusable elements inside the `target`
  const tabbableElements = [
    'a[href]',
    'link[href]',
    'button',
    'input:not([type="hidden"])',
    'select',
    'textarea',
    '[draggable]',
    'audio[controls]',
    'video[controls]',
    '[tabindex]:not([tabindex="-1"])',
  ];
  if (focusable === true) {
    target
      .querySelectorAll(tabbableElements)
      .forEach(tabbableElement => {
        tabbableElement.removeAttribute('tabindex');
      });
  } else if (focusable === false) {
    target
      .querySelectorAll(tabbableElements)
      .forEach(tabbableElement => {
        tabbableElement.setAttribute('tabindex', '-1');
      });
  }
}

/**
 * Set the toggling focus.
 *
 * @param {HTMLElement} target
 * The target to set focus on.
 *
 */

export function setFocus(target) {
  target.setAttribute('tabindex', '0');
  target.focus();
  target.removeAttribute('tabindex', '0');
}