/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShowNewMessageDirective = /** @class */ (function () {
    function IntercomShowNewMessageDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShowNewMessageDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    };
    IntercomShowNewMessageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShowNewMessage]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowNewMessageDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowNewMessageDirective.propDecorators = {
        message: [{ type: Input }],
        intercomShowNewMessage: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowNewMessageDirective;
}());
export { IntercomShowNewMessageDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LW5ldy1tZXNzYWdlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFHN0M7SUFPRSx5Q0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBR0QsaURBQU87OztJQURQOztZQUVRLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCO1FBQ3JFLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO2FBQ0k7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQy9CO0lBQ0gsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQzs7OztnQkFMTyxRQUFROzs7MEJBT2IsS0FBSzt5Q0FDTCxLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPOztJQVV2QixzQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLCtCQUErQjs7O0lBQzFDLGtEQUF3Qjs7SUFDeEIsaUVBQXVDOzs7OztJQUUzQixtREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd05ld01lc3NhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tU2hvd05ld01lc3NhZ2U6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogdGhpcy5pbnRlcmNvbVNob3dOZXdNZXNzYWdlXG4gICAgaWYgKG1zZykge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSgpXG4gICAgfVxuICB9XG59XG4iXX0=