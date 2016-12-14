(function(window) {
    'use strict';

    var Highwind = function() {

        /**
         * Define our main library object
         */
        var Lib = {};

        /**
         * Get an element by id
         */
        Lib.getById = function(selector) {
            console.log('getting by id... ', selector);
            return document.querySelector('#' + selector);
        };

        /**
         * Get an element by class
         */
        Lib.getByClass = function(selector) {
            console.log('getting by class... ', selector);
            return document.querySelector('.' + selector);
        };

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
