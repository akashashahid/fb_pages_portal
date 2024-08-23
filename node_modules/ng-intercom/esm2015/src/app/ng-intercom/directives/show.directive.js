/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFNN0MsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSxPQUFPOztjQUNOLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtRQUMzRCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNyQjtJQUNILENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUxPLFFBQVE7OztzQkFPYixLQUFLOzJCQUNMLEtBQUs7c0JBS0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFOckIsd0NBQXdCOztJQUN4Qiw2Q0FBNkI7Ozs7O0lBRWpCLHlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaG93XSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tU2hvdzogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogdGhpcy5pbnRlcmNvbVNob3dcbiAgICBpZiAobXNnKSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3dOZXdNZXNzYWdlKHRoaXMubWVzc2FnZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3coKVxuICAgIH1cbiAgfVxufVxuIl19