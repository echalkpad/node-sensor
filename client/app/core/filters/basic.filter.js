define(['angular',
        'angular-couch-potato'], function(ng, couchPotato) {
    'use strict';

    var module = ng.module('app.core');

    couchPotato.configureApp(module);

    module.filter('toTrusted', toTrustedFilter)
          .filter('htmlToPlaintext', htmlToPlainTextFilter)
          .filter('nospace', nospaceFilter)
          .filter('humanizeDoc', humanizeDocFilter);

    /** @ngInject */
    function toTrustedFilter($sce)
    {
        return function (value)
        {
            return $sce.trustAsHtml(value);
        };
    }

    /** @ngInject */
    function htmlToPlainTextFilter()
    {
        return function (text)
        {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    }

    /** @ngInject */
    function nospaceFilter()
    {
        return function (value)
        {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    }

    /** @ngInject */
    function humanizeDocFilter()
    {
        return function (doc)
        {
            if ( !doc )
            {
                return;
            }
            if ( doc.type === 'directive' )
            {
                return doc.name.replace(/([A-Z])/g, function ($1)
                {
                    return '-' + $1.toLowerCase();
                });
            }
            return doc.label || doc.name;
        };
    }

    module.run(function($couchPotato) {
        module.lazy = $couchPotato;
    });

    return module;
});
