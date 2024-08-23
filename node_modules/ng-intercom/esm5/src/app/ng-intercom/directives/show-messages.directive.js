/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShowMessagesDirective = /** @class */ (function () {
    function IntercomShowMessagesDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShowMessagesDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    };
    IntercomShowMessagesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShowMessages]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowMessagesDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowMessagesDirective.propDecorators = {
        intercomShowMessages: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowMessagesDirective;
}());
export { IntercomShowMessagesDirective };
if (false) {
    /** @type {?} */
    IntercomShowMessagesDirective.prototype.intercomShowMessages;
    /**
     * @type {?}
     * @private
     */
    IntercomShowMessagesDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaG93LW1lc3NhZ2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFBO0FBRTVELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQTs7QUFHN0M7SUFNRSx1Q0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBR00sK0NBQU87OztJQURkO1FBRUUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUE7U0FDN0I7SUFDSCxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBTE8sUUFBUTs7O3VDQU9iLEtBQUs7MEJBS0wsWUFBWSxTQUFDLE9BQU87O0lBTXZCLG9DQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksNkJBQTZCOzs7SUFDeEMsNkRBQXNDOzs7OztJQUUxQixpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd01lc3NhZ2VzXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNob3dNZXNzYWdlczogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tU2hvd01lc3NhZ2VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TWVzc2FnZXMoKVxuICAgIH1cbiAgfVxufVxuIl19