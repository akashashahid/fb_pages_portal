/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowNewMessageDirective {
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
if (false) {
    /** @type {?} */
    IntercomShowNewMessageDirective.prototype.message;
    /** @type {?} */
    IntercomShowNewMessageDirective.prototype.intercomShowNewMessage;
    /**
     * @type {?}
     * @private
     */
    IntercomShowNewMessageDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LW5ldy1tZXNzYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFNN0MsTUFBTSxPQUFPLCtCQUErQjs7OztJQUkxQyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHRCxPQUFPOztjQUNDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCO1FBQ3JFLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO2FBQ0k7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQy9CO0lBQ0gsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDOzs7O1lBTE8sUUFBUTs7O3NCQU9iLEtBQUs7cUNBQ0wsS0FBSztzQkFLTCxZQUFZLFNBQUMsT0FBTzs7OztJQU5yQixrREFBd0I7O0lBQ3hCLGlFQUF1Qzs7Ozs7SUFFM0IsbURBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVNob3dOZXdNZXNzYWdlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZ1xuICBASW5wdXQoKSBpbnRlcmNvbVNob3dOZXdNZXNzYWdlOiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIGNvbnN0IG1zZyA9IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZSA6IHRoaXMuaW50ZXJjb21TaG93TmV3TWVzc2FnZVxuICAgIGlmIChtc2cpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvd05ld01lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvd05ld01lc3NhZ2UoKVxuICAgIH1cbiAgfVxufVxuIl19