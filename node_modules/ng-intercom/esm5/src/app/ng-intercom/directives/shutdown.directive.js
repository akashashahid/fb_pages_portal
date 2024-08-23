/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
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
        { type: Directive, args: [{
                    selector: '[intercomShutdown]'
                },] }
    ];
    /** @nocollapse */
    IntercomShutdownDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShutdownDirective.propDecorators = {
        intercomShutdown: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShutdownDirective;
}());
export { IntercomShutdownDirective };
if (false) {
    /** @type {?} */
    IntercomShutdownDirective.prototype.intercomShutdown;
    /**
     * @type {?}
     * @private
     */
    IntercomShutdownDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvc2h1dGRvd24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUc3QztJQU1FLG1DQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSwyQ0FBTzs7O0lBRGQ7UUFFRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtTQUN6QjtJQUNILENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFMTyxRQUFROzs7bUNBT2IsS0FBSzswQkFLTCxZQUFZLFNBQUMsT0FBTzs7SUFNdkIsZ0NBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSx5QkFBeUI7OztJQUNwQyxxREFBa0M7Ozs7O0lBRXRCLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaHV0ZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNodXRkb3duOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjb21TaHV0ZG93biAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2h1dGRvd24oKVxuICAgIH1cbiAgfVxufVxuIl19