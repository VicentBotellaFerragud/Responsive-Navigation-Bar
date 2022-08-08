/**
 * This function, called when the user clicks on the hamburger menu (displayed on devices whose screen is less than 800px wide), 
 * toggles the CSS class "open", which adds and removes certain CSS features to the CSS classes "bar1", "bar2", "bar3" and 
 * "mobile-menu" in order to display a suitable navigation menu for smartphone devices.
 * @param {HTMLElement} menu - This is the reference to the "hamburger-icon" div. The CSS class "open" is given to (or remove from) 
 * this element, which contains the elements that the CSS class "open" affects.
 */
function toggleMobileMenu(menu) {

    menu.classList.toggle('open');
    
}