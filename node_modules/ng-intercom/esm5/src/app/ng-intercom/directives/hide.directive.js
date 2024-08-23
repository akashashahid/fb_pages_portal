/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
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
        { type: Directive, args: [{
                    selector: '[intercomHide]'
                },] }
    ];
    /** @nocollapse */
    IntercomHideDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomHideDirective.propDecorators = {
        intercomHide: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomHideDirective;
}());
export { IntercomHideDirective };
if (false) {
    /** @type {?} */
    IntercomHideDirective.prototype.intercomHide;
    /**
     * @type {?}
     * @private
     */
    IntercomHideDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9oaWRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7QUFHL0M7SUFNRSwrQkFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3hCLENBQUM7Ozs7SUFHRSx1Q0FBTzs7O0lBRGQ7UUFFRSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDdkI7SUFDSCxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTFEsUUFBUTs7OytCQU9kLEtBQUs7MEJBTUwsWUFBWSxTQUFDLE9BQU87O0lBTXZCLDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxxQkFBcUI7OztJQUNoQyw2Q0FBOEI7Ozs7O0lBRzVCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IEludGVyY29tIH0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tSGlkZV0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tSGlkZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGludGVyY29tSGlkZTogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW50ZXJjb206IEludGVyY29tXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcmNvbUhpZGUgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW50ZXJjb20uaGlkZSgpXG4gICAgfVxuICB9XG59XG4iXX0=