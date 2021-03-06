(function() {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * it's components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',
        'app.data', // needs core
        'app.widgets', // needs core

        /*
         * Feature areas
         */
        'app.layout', 'app.index', 'app.pages', 'app.categories',
        'app.attributes', 'app.brands', 'app.currency', 'app.payments', 'app.delivery',
        'app.discount', 'app.orders', 'app.users', 'app.products'
    ]);
})();
