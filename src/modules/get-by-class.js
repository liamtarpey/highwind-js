/**
 * Get an element by class
 */
Lib.getByClass = function(selector) {
    console.log('getting by class... ', selector);
    return document.querySelector('.' + selector);
};
