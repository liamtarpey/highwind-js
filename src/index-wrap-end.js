/**
 * Return library object
 */
return Lib;
};

/**
* Create Highwind on window object
*/
if(typeof(window.Highwind) === 'undefined') {
window.Highwind = Highwind();
} else {
console.warning('Highwind library is already defined! Can\'t load library.');
}

})(window);
