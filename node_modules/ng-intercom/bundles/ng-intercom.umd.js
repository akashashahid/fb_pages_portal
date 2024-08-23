(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/common'), require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-intercom', ['exports', 'rxjs/operators', '@angular/common', '@angular/router', '@angular/core'], factory) :
    (factory((global['ng-intercom'] = {}),global.rxjs.operators,global.ng.common,global.ng.router,global.ng.core));
}(this, (function (exports,operators,common,router,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IntercomConfig = /** @class */ (function () {
        function IntercomConfig() {
        }
        IntercomConfig.decorators = [
            { type: core.Injectable }
        ];
        return IntercomConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * A provider with every Intercom.JS method
     */
    var Intercom = /** @class */ (function () {
        function Intercom(config, platformId, router$$1, rendererFactory, document // Document
        ) {
            var _this = this;
            this.config = config;
            this.platformId = platformId;
            this.router = router$$1;
            this.rendererFactory = rendererFactory;
            this.document = document;
            if (!common.isPlatformBrowser(this.platformId)) {
                return;
            }
            this.renderer2 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: core.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            // Subscribe to router changes
            if (config && config.updateOnRouterChange) {
                this.router.events.pipe(operators.filter(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) { return event instanceof router.NavigationEnd; }))).subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    _this.update();
                }));
            }
            else if (core.isDevMode()) {
                console.warn("\n      Common practice in single page applications is to update whenever the route changes.\n      ng-intercom supports this functionality out of the box just set 'updateOnRouterChange' to true in your Intercom Module config.\n       This warning will not appear in production, if you choose not to use router updating.\n     ");
            }
        }
        /**
         * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
         * This is useful in situations like a one-page Javascript based application where the user may not be logged in
         * when the page loads. You call this method with the standard intercomSettings object.
         */
        /**
         * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
         * This is useful in situations like a one-page Javascript based application where the user may not be logged in
         * when the page loads. You call this method with the standard intercomSettings object.
         * @param {?=} intercomData
         * @return {?}
         */
        Intercom.prototype.boot = /**
         * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
         * This is useful in situations like a one-page Javascript based application where the user may not be logged in
         * when the page loads. You call this method with the standard intercomSettings object.
         * @param {?=} intercomData
         * @return {?}
         */
            function (intercomData) {
                var _this = this;
                if (!common.isPlatformBrowser(this.platformId)) {
                    return;
                }
                /** @type {?} */
                var app_id = intercomData.app_id ? intercomData.app_id : this.config.appId;
                // Run load and attach to window
                this.loadIntercom(this.config, ( /**
                 * @param {?=} event
                 * @return {?}
                 */function (event) {
                    // then boot the intercom js
                    /** @type {?} */
                    var data = __assign({}, intercomData, { app_id: app_id });
                    return _this._callIntercom('boot', data);
                }));
            };
        /**
         * If you have the Respond product (combined with another product like Engage)
         * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
         * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
         * or computer will keep these conversations in the Messenger for one week.
         * This method will effectively clear out any user data that you have been passing through the JS API.
         */
        /**
         * If you have the Respond product (combined with another product like Engage)
         * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
         * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
         * or computer will keep these conversations in the Messenger for one week.
         * This method will effectively clear out any user data that you have been passing through the JS API.
         * @return {?}
         */
        Intercom.prototype.shutdown = /**
         * If you have the Respond product (combined with another product like Engage)
         * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
         * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
         * or computer will keep these conversations in the Messenger for one week.
         * This method will effectively clear out any user data that you have been passing through the JS API.
         * @return {?}
         */
            function () {
                return this._callIntercom('shutdown');
            };
        /**
         * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
         * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
         * and show them if they exist.
         *
         * Calling the update method with a JSON object of user details will update those fields on the current user
         * in addition to logging an impression at the current URL and looking for new messages for the user.
         */
        /**
         * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
         * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
         * and show them if they exist.
         *
         * Calling the update method with a JSON object of user details will update those fields on the current user
         * in addition to logging an impression at the current URL and looking for new messages for the user.
         * @param {?=} data
         * @return {?}
         */
        Intercom.prototype.update = /**
         * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
         * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
         * and show them if they exist.
         *
         * Calling the update method with a JSON object of user details will update those fields on the current user
         * in addition to logging an impression at the current URL and looking for new messages for the user.
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                return this._callIntercom('update', data);
            };
        /**
         * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
         */
        /**
         * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
         * @return {?}
         */
        Intercom.prototype.hide = /**
         * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
         * @return {?}
         */
            function () {
                return this._callIntercom('hide');
            };
        /**
         * This will show the Messenger. If there are no conversations it will open with the new message view,
         * if there are it will open with the message list.
         *
         * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
         *
         */
        /**
         * This will show the Messenger. If there are no conversations it will open with the new message view,
         * if there are it will open with the message list.
         *
         * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
         *
         * @param {?=} message
         * @return {?}
         */
        Intercom.prototype.show = /**
         * This will show the Messenger. If there are no conversations it will open with the new message view,
         * if there are it will open with the message list.
         *
         * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
         *
         * @param {?=} message
         * @return {?}
         */
            function (message) {
                if (message) {
                    return this.showNewMessage(message);
                }
                return this._callIntercom('show');
            };
        /**
         * To open the message window with the message list you can call `showMessages()`.
         */
        /**
         * To open the message window with the message list you can call `showMessages()`.
         * @return {?}
         */
        Intercom.prototype.showMessages = /**
         * To open the message window with the message list you can call `showMessages()`.
         * @return {?}
         */
            function () {
                return this._callIntercom('showMessages');
            };
        /**
         * To open the message window with the new message view you can call showNewMessage().
         *
         * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
         */
        /**
         * To open the message window with the new message view you can call showNewMessage().
         *
         * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
         * @param {?=} message
         * @return {?}
         */
        Intercom.prototype.showNewMessage = /**
         * To open the message window with the new message view you can call showNewMessage().
         *
         * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
         * @param {?=} message
         * @return {?}
         */
            function (message) {
                return this._callIntercom('showNewMessage', message);
            };
        /**
         * You can submit an event using the trackEvent method.
         * This will associate the event with the currently logged in user and send it to Intercom.
         * The final parameter is a map that can be used to send optional metadata about the event.
         *
         * You can also add custom information to events in the form of event metadata.
         */
        /**
         * You can submit an event using the trackEvent method.
         * This will associate the event with the currently logged in user and send it to Intercom.
         * The final parameter is a map that can be used to send optional metadata about the event.
         *
         * You can also add custom information to events in the form of event metadata.
         * @param {?} eventName
         * @param {?=} metadata
         * @return {?}
         */
        Intercom.prototype.trackEvent = /**
         * You can submit an event using the trackEvent method.
         * This will associate the event with the currently logged in user and send it to Intercom.
         * The final parameter is a map that can be used to send optional metadata about the event.
         *
         * You can also add custom information to events in the form of event metadata.
         * @param {?} eventName
         * @param {?=} metadata
         * @return {?}
         */
            function (eventName, metadata) {
                return this._callIntercom('trackEvent', eventName, metadata);
            };
        /**
         * A visitor is someone who goes to your site but does not use the messenger.
         * You can track these visitors via the visitor user_id.
         * This user_id can be used to retrieve the visitor or lead through the REST API.
         */
        /**
         * A visitor is someone who goes to your site but does not use the messenger.
         * You can track these visitors via the visitor user_id.
         * This user_id can be used to retrieve the visitor or lead through the REST API.
         * @return {?}
         */
        Intercom.prototype.getVisitorId = /**
         * A visitor is someone who goes to your site but does not use the messenger.
         * You can track these visitors via the visitor user_id.
         * This user_id can be used to retrieve the visitor or lead through the REST API.
         * @return {?}
         */
            function () {
                return this._callIntercom('getVisitorId');
            };
        Object.defineProperty(Intercom.prototype, "visitorId", {
            /**
             * Alias for getVisitorId()
             * @alias getVisitorId()
             * @readonly
             */
            get: /**
             * Alias for getVisitorId()
             * \@alias getVisitorId()
             * \@readonly
             * @return {?}
             */ function () {
                return this._callIntercom('getVisitorId');
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Gives you the ability to hook into the show event. Requires a function argument.
         */
        /**
         * Gives you the ability to hook into the show event. Requires a function argument.
         * @param {?} handler
         * @return {?}
         */
        Intercom.prototype.onShow = /**
         * Gives you the ability to hook into the show event. Requires a function argument.
         * @param {?} handler
         * @return {?}
         */
            function (handler) {
                return this._callIntercom('onShow', handler);
            };
        /**
         * Gives you the ability to hook into the hide event. Requires a function argument.
         */
        /**
         * Gives you the ability to hook into the hide event. Requires a function argument.
         * @param {?} handler
         * @return {?}
         */
        Intercom.prototype.onHide = /**
         * Gives you the ability to hook into the hide event. Requires a function argument.
         * @param {?} handler
         * @return {?}
         */
            function (handler) {
                return this._callIntercom('onHide', handler);
            };
        /**
         * This method allows you to register a function that will be called when the current number of unread messages changes.
         */
        /**
         * This method allows you to register a function that will be called when the current number of unread messages changes.
         * @param {?} handler
         * @return {?}
         */
        Intercom.prototype.onUnreadCountChange = /**
         * This method allows you to register a function that will be called when the current number of unread messages changes.
         * @param {?} handler
         * @return {?}
         */
            function (handler) {
                return this._callIntercom('onUnreadCountChange', handler);
            };
        /**
         * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
         * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
         * the tour can be found in the “Use tour everywhere” section of the tour editor.
         *
         * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
         * turned on. If you're calling this API using an invalid tour id, nothing will happen.
         */
        /**
         * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
         * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
         * the tour can be found in the “Use tour everywhere” section of the tour editor.
         *
         * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
         * turned on. If you're calling this API using an invalid tour id, nothing will happen.
         * @param {?} tourId
         * @return {?}
         */
        Intercom.prototype.startTour = /**
         * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
         * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
         * the tour can be found in the “Use tour everywhere” section of the tour editor.
         *
         * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
         * turned on. If you're calling this API using an invalid tour id, nothing will happen.
         * @param {?} tourId
         * @return {?}
         */
            function (tourId) {
                return this._callIntercom('startTour', tourId);
            };
        /**
         * Private handler to run Intercom methods safely
         */
        /**
         * Private handler to run Intercom methods safely
         * @private
         * @param {?} fn
         * @param {...?} args
         * @return {?}
         */
        Intercom.prototype._callIntercom = /**
         * Private handler to run Intercom methods safely
         * @private
         * @param {?} fn
         * @param {...?} args
         * @return {?}
         */
            function (fn) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!common.isPlatformBrowser(this.platformId)) {
                    return;
                }
                if ((( /** @type {?} */(window))).Intercom) {
                    return (( /** @type {?} */(window))).Intercom.apply((( /** @type {?} */(window))), __spread([fn], args));
                }
                return;
            };
        /**
         * @param {?} conf
         * @param {?} afterInjectCallback
         * @return {?}
         */
        Intercom.prototype.injectIntercomScript = /**
         * @param {?} conf
         * @param {?} afterInjectCallback
         * @return {?}
         */
            function (conf, afterInjectCallback) {
                if (!common.isPlatformBrowser(this.platformId)) {
                    return;
                }
                // Set the window configuration to conf
                (( /** @type {?} */(window))).intercomSettings = conf;
                // Create the intercom script in document
                /** @type {?} */
                var s = this.document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = "https://widget.intercom.io/widget/" + this.id;
                if ((( /** @type {?} */(s))).attachEvent) {
                    (( /** @type {?} */(s))).attachEvent('onload', afterInjectCallback);
                }
                else {
                    s.addEventListener('load', afterInjectCallback, false);
                }
                if (this.renderer2 && this.renderer2.appendChild) {
                    this.renderer2.appendChild(this.document.head, s);
                }
                (( /** @type {?} */(window))).Intercom('update', conf);
            };
        /**
         * @param {?} config
         * @param {?} afterLoadCallback
         * @return {?}
         */
        Intercom.prototype.loadIntercom = /**
         * @param {?} config
         * @param {?} afterLoadCallback
         * @return {?}
         */
            function (config, afterLoadCallback) {
                if (!common.isPlatformBrowser(this.platformId)) {
                    return;
                }
                this.id = config.appId;
                /** @type {?} */
                var w = ( /** @type {?} */(window));
                /** @type {?} */
                var ic = w.Intercom;
                // Set window config for Intercom
                w.intercomSettings = config;
                if (typeof ic === 'function') {
                    ic('reattach_activator');
                    ic('update', config);
                    afterLoadCallback();
                }
                else {
                    /** @type {?} */
                    var i_1 = ( /**
                     * @return {?}
                     */function () {
                        i_1.c(arguments);
                    });
                    i_1.q = [];
                    i_1.c = ( /**
                     * @param {?} args
                     * @return {?}
                     */function (args) {
                        i_1.q.push(args);
                    });
                    w.Intercom = i_1;
                    this.injectIntercomScript(config, afterLoadCallback);
                }
            };
        Intercom.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Intercom.ctorParameters = function () {
            return [
                { type: IntercomConfig, decorators: [{ type: core.Inject, args: [IntercomConfig,] }] },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: router.Router, decorators: [{ type: core.Optional }, { type: core.Inject, args: [router.Router,] }] },
                { type: core.RendererFactory2 },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        return Intercom;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomHideDirective = /** @class */ (function () {
        function IntercomHideDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomHideDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.intercomHide !== false) {
                    this.intercom.hide();
                }
            };
        IntercomHideDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomHide]'
                    },] }
        ];
        /** @nocollapse */
        IntercomHideDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomHideDirective.propDecorators = {
            intercomHide: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomHideDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomShowMessagesDirective = /** @class */ (function () {
        function IntercomShowMessagesDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomShowMessagesDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.intercomShowMessages !== false) {
                    this.intercom.showMessages();
                }
            };
        IntercomShowMessagesDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomShowMessages]'
                    },] }
        ];
        /** @nocollapse */
        IntercomShowMessagesDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomShowMessagesDirective.propDecorators = {
            intercomShowMessages: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomShowMessagesDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomShowNewMessageDirective = /** @class */ (function () {
        function IntercomShowNewMessageDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomShowNewMessageDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var msg = this.message ? this.message : this.intercomShowNewMessage;
                if (msg) {
                    this.intercom.showNewMessage(this.message);
                }
                else {
                    this.intercom.showNewMessage();
                }
            };
        IntercomShowNewMessageDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomShowNewMessage]'
                    },] }
        ];
        /** @nocollapse */
        IntercomShowNewMessageDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomShowNewMessageDirective.propDecorators = {
            message: [{ type: core.Input }],
            intercomShowNewMessage: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomShowNewMessageDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomShowDirective = /** @class */ (function () {
        function IntercomShowDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomShowDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var msg = this.message ? this.message : this.intercomShow;
                if (msg) {
                    this.intercom.showNewMessage(this.message);
                }
                else {
                    this.intercom.show();
                }
            };
        IntercomShowDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomShow]'
                    },] }
        ];
        /** @nocollapse */
        IntercomShowDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomShowDirective.propDecorators = {
            message: [{ type: core.Input }],
            intercomShow: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomShowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomShutdownDirective = /** @class */ (function () {
        function IntercomShutdownDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomShutdownDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                if (this.intercomShutdown !== false) {
                    this.intercom.shutdown();
                }
            };
        IntercomShutdownDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomShutdown]'
                    },] }
        ];
        /** @nocollapse */
        IntercomShutdownDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomShutdownDirective.propDecorators = {
            intercomShutdown: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomShutdownDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable:directive-selector */
    var IntercomTrackEventDirective = /** @class */ (function () {
        function IntercomTrackEventDirective(intercom) {
            this.intercom = intercom;
        }
        /**
         * @return {?}
         */
        IntercomTrackEventDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var e = this.event ? this.event : this.intercomTrackEvent;
                if (e && this.metadata) {
                    this.intercom.trackEvent(e, this.metadata);
                }
                else if (e && !this.metadata) {
                    this.intercom.trackEvent(e);
                }
                else {
                    throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
                }
            };
        IntercomTrackEventDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[intercomTrackEvent]'
                    },] }
        ];
        /** @nocollapse */
        IntercomTrackEventDirective.ctorParameters = function () {
            return [
                { type: Intercom }
            ];
        };
        IntercomTrackEventDirective.propDecorators = {
            event: [{ type: core.Input }],
            intercomTrackEvent: [{ type: core.Input }],
            metadata: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return IntercomTrackEventDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IntercomModule = /** @class */ (function () {
        function IntercomModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        IntercomModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: IntercomModule,
                    providers: [
                        Intercom,
                        { provide: IntercomConfig, useValue: config },
                    ]
                };
            };
        IntercomModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule
                        ],
                        declarations: [
                            IntercomHideDirective,
                            IntercomShowMessagesDirective,
                            IntercomShowNewMessageDirective,
                            IntercomShowDirective,
                            IntercomShutdownDirective,
                            IntercomTrackEventDirective
                        ],
                        exports: [
                            IntercomHideDirective,
                            IntercomShowMessagesDirective,
                            IntercomShowNewMessageDirective,
                            IntercomShowDirective,
                            IntercomShutdownDirective,
                            IntercomTrackEventDirective
                        ],
                        providers: [
                            Intercom,
                            IntercomConfig
                        ]
                    },] }
        ];
        return IntercomModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Intercom = Intercom;
    exports.IntercomConfig = IntercomConfig;
    exports.IntercomHideDirective = IntercomHideDirective;
    exports.IntercomModule = IntercomModule;
    exports.IntercomShowDirective = IntercomShowDirective;
    exports.IntercomShowMessagesDirective = IntercomShowMessagesDirective;
    exports.IntercomShowNewMessageDirective = IntercomShowNewMessageDirective;
    exports.IntercomShutdownDirective = IntercomShutdownDirective;
    exports.IntercomTrackEventDirective = IntercomTrackEventDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-intercom.umd.js.map