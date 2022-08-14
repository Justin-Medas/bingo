/**
 * @file
 * ButtonToggle class.
 */

/**
 * The ButtonToggle class provides an easy way to add a toggleable button. It accepts
 * parameters to facilitate an accessible experience through aria labeling and cursor refocus
 *
 */

  /**
   * Create the state from supplied options and defaults. Options can be
   * specificed on object creation by passing an object, or inline as data
   * attributes on the button DOM element.
   *
   * @property {string} buttonLabel
   *  The aria-label value to add to the button
   * @property {string} buttonControls
   *  The aria-controls value to add to the button. This value is used reset the user focus
   *  on the now active element
   * @property {string} buttonToggleType - accordion, menu, toggle
   *  The toggle type determines what additional accessibility values should be added. 
   *  IE aria-expaned, aria-pressed, and aria-haspopup 
   *  @todo Create conditional functionality for aria-haspopup, aria-pressed, & aria-expanded
   */    
const ButtonToggle = ({
  shouldFocus = true,
  isToggled = false,
  isClicked= false,
  onToggle= () => {},
  onIsToggled = () => {},
  onIsNotToggled = () => {},
  buttonClass,
  buttonLabel,
  buttonId,
  buttonControls,
  buttonToggleType,
  buttonText,
  disabled,
}) => {

  const handleClick = (button) => {
    onToggle();
    if(isToggled === false) {
      onIsToggled();
      // setFocus(document.getElementById(buttonControls));

    } else {
      onIsNotToggled();
    }
  }
  return (
    <button
      type="button"
      className={buttonClass}
      aria-live="polite"
      aria-label={buttonLabel}
      id={buttonId}
      aria-controls={buttonControls}
      onClick={(e) => {handleClick(e)}}
      aria-haspopup={buttonToggleType === 'menu' ? true : '' }
      aria-expanded={isToggled}
      disabled={disabled}
    > {buttonText !== undefined && <span>{buttonText}</span>} 
    </button>
  );
}

export default ButtonToggle;