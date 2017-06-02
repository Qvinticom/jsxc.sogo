/*!
 * sjsxc v3.2.1 - 2017-06-02
 * 
 * Copyright (c) 2017 Klaus Herberth <klaus@jsxc.org> <br>
 * Released under the MIT license
 * 
 * Please see http://jsxc.org/
 * 
 * @author Klaus Herberth <klaus@jsxc.org>
 * @version 3.2.1
 * @license MIT
 */

/**
 * Rename/copy this file to sjsxc.config.js and adjust the settings.
 */

var sjsxc = {};
sjsxc.config = {
    /** enable chat by default? */
    enable: true,

    xmpp: {
        /** url to bosh server binding. */
        url: '/http-bind/',

        /** domain part of your jid */
        domain: 'localhost',

        /** which resource should be used? Blank, means random. */
        resource: '',

        /** Allow user to overwrite xmpp settings? */
        overwrite: true,

        /** Should chat start on login? */
        onlogin: true
    },

    /** JSXC options. */
    jsxc: {

    },

    /** Domain specific settings. */
    'example.local': {
       enable: false
    }
};

