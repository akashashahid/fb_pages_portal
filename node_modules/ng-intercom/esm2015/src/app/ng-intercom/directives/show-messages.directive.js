/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowMessagesDirective {
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
if (false) {
    /** @type {?} */
    IntercomShowMessagesDirective.prototype.intercomShowMessages;
    /**
     * @type {?}
     * @private
     */
    IntercomShowMessagesDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LW1lc3NhZ2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFNN0MsTUFBTSxPQUFPLDZCQUE2Qjs7OztJQUd4QyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUE7U0FDN0I7SUFDSCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7OztZQUxPLFFBQVE7OzttQ0FPYixLQUFLO3NCQUtMLFlBQVksU0FBQyxPQUFPOzs7O0lBTHJCLDZEQUFzQzs7Ozs7SUFFMUIsaURBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVNob3dNZXNzYWdlc10nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW50ZXJjb21TaG93TWVzc2FnZXM6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcmNvbVNob3dNZXNzYWdlcyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvd01lc3NhZ2VzKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==