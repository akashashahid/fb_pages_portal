/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomHideDirective {
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
if (false) {
    /** @type {?} */
    IntercomHideDirective.prototype.intercomHide;
    /**
     * @type {?}
     * @private
     */
    IntercomHideDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9oaWRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTs7QUFNL0MsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUdoQyxZQUNVLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDeEIsQ0FBQzs7OztJQUdFLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDdkI7SUFDSCxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUxRLFFBQVE7OzsyQkFPZCxLQUFLO3NCQU1MLFlBQVksU0FBQyxPQUFPOzs7O0lBTnJCLDZDQUE4Qjs7Ozs7SUFHNUIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgSW50ZXJjb20gfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21IaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21IaWRlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW50ZXJjb21IaWRlOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb21cbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tSGlkZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbnRlcmNvbS5oaWRlKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==