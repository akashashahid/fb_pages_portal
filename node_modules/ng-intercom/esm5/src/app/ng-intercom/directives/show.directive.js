/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
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
        { type: Directive, args: [{
                    selector: '[intercomShow]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowDirective.propDecorators = {
        message: [{ type: Input }],
        intercomShow: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowDirective;
}());
export { IntercomShowDirective };
if (false) {
    /** @type {?} */
    IntercomShowDirective.prototype.message;
    /** @type {?} */
    IntercomShowDirective.prototype.intercomShow;
    /**
     * @type {?}
     * @private
     */
    IntercomShowDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFHN0M7SUFPRSwrQkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBR00sdUNBQU87OztJQURkOztZQUVRLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtRQUMzRCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNyQjtJQUNILENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTE8sUUFBUTs7OzBCQU9iLEtBQUs7K0JBQ0wsS0FBSzswQkFLTCxZQUFZLFNBQUMsT0FBTzs7SUFVdkIsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWpCWSxxQkFBcUI7OztJQUNoQyx3Q0FBd0I7O0lBQ3hCLDZDQUE2Qjs7Ozs7SUFFakIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVNob3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dEaXJlY3RpdmUge1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmdcbiAgQElucHV0KCkgaW50ZXJjb21TaG93OiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBtc2cgPSB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiB0aGlzLmludGVyY29tU2hvd1xuICAgIGlmIChtc2cpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvd05ld01lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvdygpXG4gICAgfVxuICB9XG59XG4iXX0=