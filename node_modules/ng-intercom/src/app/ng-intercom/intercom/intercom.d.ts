import { RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { IntercomConfig } from '../shared/intercom-config';
import { BootInput } from '../types/boot-input';
/**
 * A provider with every Intercom.JS method
 */
export declare class Intercom {
    private config;
    protected platformId: Object;
    private router;
    private rendererFactory;
    private document;
    private id;
    private renderer2;
    constructor(config: IntercomConfig, platformId: Object, router: Router, rendererFactory: RendererFactory2, document: any);
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     */
    boot(intercomData?: BootInput): void;
    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     */
    shutdown(): void;
    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     */
    update(data?: any): void;
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     */
    hide(): void;
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     */
    show(message?: string): void;
    /**
     * To open the message window with the message list you can call `showMessages()`.
     */
    showMessages(): void;
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     */
    showNewMessage(message?: string): void;
    /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     */
    trackEvent(eventName: string, metadata?: any): void;
    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     */
    getVisitorId(): string;
    /**
     * Alias for getVisitorId()
     * @alias getVisitorId()
     * @readonly
     */
    readonly visitorId: string;
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     */
    onShow(handler: () => void): void;
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     */
    onHide(handler: () => void): void;
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     */
    onUnreadCountChange(handler: (unreadCount?: number) => void): void;
    /**
     * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
     * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
     * the tour can be found in the “Use tour everywhere” section of the tour editor.
     *
     * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
     * turned on. If you're calling this API using an invalid tour id, nothing will happen.
     */
    startTour(tourId: number): void;
    /**
     * Private handler to run Intercom methods safely
     */
    private _callIntercom;
    injectIntercomScript(conf: IntercomConfig, afterInjectCallback: (ev: Event) => any): void;
    loadIntercom(config: IntercomConfig, afterLoadCallback: (ev?: Event) => any): void;
}
