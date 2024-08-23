/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShutdownDirective {
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
if (false) {
    /** @type {?} */
    IntercomShutdownDirective.prototype.intercomShutdown;
    /**
     * @type {?}
     * @private
     */
    IntercomShutdownDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvc2h1dGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQU03QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtTQUN6QjtJQUNILENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBTE8sUUFBUTs7OytCQU9iLEtBQUs7c0JBS0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFMckIscURBQWtDOzs7OztJQUV0Qiw2Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2h1dGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW50ZXJjb21TaHV0ZG93bjogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tU2h1dGRvd24gIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmludGVyY29tLnNodXRkb3duKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==