import { filter } from 'rxjs/operators';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID, Optional, isDevMode, RendererFactory2, ViewEncapsulation, Directive, HostListener, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IntercomConfig {
}
IntercomConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A provider with every Intercom.JS method
 */
class Intercom {
    /**
     * @param {?} config
     * @param {?} platformId
     * @param {?} router
     * @param {?} rendererFactory
     * @param {?} document
     */
    constructor(config, platformId, router, rendererFactory, document // Document
    ) {
        this.config = config;
        this.platformId = platformId;
        this.router = router;
        this.rendererFactory = rendererFactory;
        this.document = document;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.renderer2 = this.rendererFactory.createRenderer(this.document, {
            id: '-1',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        // Subscribe to router changes
        if (config && config.updateOnRouterChange) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            event => event instanceof NavigationEnd))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this.update();
            }));
        }
        else if (isDevMode()) {
            console.warn(`
      Common practice in single page applications is to update whenever the route changes.
      ng-intercom supports this functionality out of the box just set 'updateOnRouterChange' to true in your Intercom Module config.
       This warning will not appear in production, if you choose not to use router updating.
     `);
        }
    }
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     * @param {?=} intercomData
     * @return {?}
     */
    boot(intercomData) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        const app_id = intercomData.app_id ? intercomData.app_id : this.config.appId
        // Run load and attach to window
        ;
        // Run load and attach to window
        this.loadIntercom(this.config, (/**
         * @param {?=} event
         * @return {?}
         */
        (event) => {
            // then boot the intercom js
            /** @type {?} */
            const data = Object.assign({}, intercomData, { app_id });
            return this._callIntercom('boot', data);
        }));
    }
    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     * @return {?}
     */
    shutdown() {
        return this._callIntercom('shutdown');
    }
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
    update(data) {
        return this._callIntercom('update', data);
    }
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     * @return {?}
     */
    hide() {
        return this._callIntercom('hide');
    }
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     * @param {?=} message
     * @return {?}
     */
    show(message) {
        if (message) {
            return this.showNewMessage(message);
        }
        return this._callIntercom('show');
    }
    /**
     * To open the message window with the message list you can call `showMessages()`.
     * @return {?}
     */
    showMessages() {
        return this._callIntercom('showMessages');
    }
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     * @param {?=} message
     * @return {?}
     */
    showNewMessage(message) {
        return this._callIntercom('showNewMessage', message);
    }
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
    trackEvent(eventName, metadata) {
        return this._callIntercom('trackEvent', eventName, metadata);
    }
    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     * @return {?}
     */
    getVisitorId() {
        return this._callIntercom('getVisitorId');
    }
    /**
     * Alias for getVisitorId()
     * \@alias getVisitorId()
     * \@readonly
     * @return {?}
     */
    get visitorId() {
        return this._callIntercom('getVisitorId');
    }
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    onShow(handler) {
        return this._callIntercom('onShow', handler);
    }
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    onHide(handler) {
        return this._callIntercom('onHide', handler);
    }
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     * @param {?} handler
     * @return {?}
     */
    onUnreadCountChange(handler) {
        return this._callIntercom('onUnreadCountChange', handler);
    }
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
    startTour(tourId) {
        return this._callIntercom('startTour', tourId);
    }
    /**
     * Private handler to run Intercom methods safely
     * @private
     * @param {?} fn
     * @param {...?} args
     * @return {?}
     */
    _callIntercom(fn, ...args) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        if (((/** @type {?} */ (window))).Intercom) {
            return ((/** @type {?} */ (window))).Intercom(fn, ...args);
        }
        return;
    }
    /**
     * @param {?} conf
     * @param {?} afterInjectCallback
     * @return {?}
     */
    injectIntercomScript(conf, afterInjectCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        // Set the window configuration to conf
        ((/** @type {?} */ (window))).intercomSettings = conf;
        // Create the intercom script in document
        /** @type {?} */
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = `https://widget.intercom.io/widget/${this.id}`;
        if (((/** @type {?} */ (s))).attachEvent) {
            ((/** @type {?} */ (s))).attachEvent('onload', afterInjectCallback);
        }
        else {
            s.addEventListener('load', afterInjectCallback, false);
        }
        if (this.renderer2 && this.renderer2.appendChild) {
            this.renderer2.appendChild(this.document.head, s);
        }
        ((/** @type {?} */ (window))).Intercom('update', conf);
    }
    /**
     * @param {?} config
     * @param {?} afterLoadCallback
     * @return {?}
     */
    loadIntercom(config, afterLoadCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.id = config.appId;
        /** @type {?} */
        const w = (/** @type {?} */ (window));
        /** @type {?} */
        const ic = w.Intercom
        // Set window config for Intercom
        ;
        // Set window config for Intercom
        w.intercomSettings = config;
        if (typeof ic === 'function') {
            ic('reattach_activator');
            ic('update', config);
            afterLoadCallback();
        }
        else {
            /** @type {?} */
            const i = (/**
             * @return {?}
             */
            function () {
                i.c(arguments);
            });
            i.q = [];
            i.c = (/**
             * @param {?} args
             * @return {?}
             */
            function (args) {
                i.q.push(args);
            });
            w.Intercom = i;
            this.injectIntercomScript(config, afterLoadCallback);
        }
    }
}
Intercom.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Intercom.ctorParameters = () => [
    { type: IntercomConfig, decorators: [{ type: Inject, args: [IntercomConfig,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Router, decorators: [{ type: Optional }, { type: Inject, args: [Router,] }] },
    { type: RendererFactory2 },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomHideDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.intercomHide !== false) {
            this.intercom.hide();
        }
    }
}
IntercomHideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomHide]'
            },] }
];
/** @nocollapse */
IntercomHideDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomHideDirective.propDecorators = {
    intercomHide: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomShowMessagesDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    }
}
IntercomShowMessagesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShowMessages]'
            },] }
];
/** @nocollapse */
IntercomShowMessagesDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowMessagesDirective.propDecorators = {
    intercomShowMessages: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomShowNewMessageDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    }
}
IntercomShowNewMessageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShowNewMessage]'
            },] }
];
/** @nocollapse */
IntercomShowNewMessageDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowNewMessageDirective.propDecorators = {
    message: [{ type: Input }],
    intercomShowNewMessage: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomShowDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.show();
        }
    }
}
IntercomShowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShow]'
            },] }
];
/** @nocollapse */
IntercomShowDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowDirective.propDecorators = {
    message: [{ type: Input }],
    intercomShow: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomShutdownDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.intercomShutdown !== false) {
            this.intercom.shutdown();
        }
    }
}
IntercomShutdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShutdown]'
            },] }
];
/** @nocollapse */
IntercomShutdownDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShutdownDirective.propDecorators = {
    intercomShutdown: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:directive-selector */
class IntercomTrackEventDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    }
}
IntercomTrackEventDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomTrackEvent]'
            },] }
];
/** @nocollapse */
IntercomTrackEventDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomTrackEventDirective.propDecorators = {
    event: [{ type: Input }],
    intercomTrackEvent: [{ type: Input }],
    metadata: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IntercomModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfig, useValue: config },
            ]
        };
    }
}
IntercomModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Intercom, IntercomConfig, IntercomHideDirective, IntercomModule, IntercomShowDirective, IntercomShowMessagesDirective, IntercomShowNewMessageDirective, IntercomShutdownDirective, IntercomTrackEventDirective };

//# sourceMappingURL=ng-intercom.js.map