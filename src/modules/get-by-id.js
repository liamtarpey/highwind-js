/**
 * Get an element by id
 */
Lib.getById = function(selector) {
    console.log('getting by id... ', selector);
    return document.querySelector('#' + selector);
};
