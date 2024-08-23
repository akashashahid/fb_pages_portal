/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomTrackEventDirective = /** @class */ (function () {
    function IntercomTrackEventDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomTrackEventDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    };
    IntercomTrackEventDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomTrackEvent]'
                },] }
    ];
    /** @nocollapse */
    IntercomTrackEventDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomTrackEventDirective.propDecorators = {
        event: [{ type: Input }],
        intercomTrackEvent: [{ type: Input }],
        metadata: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomTrackEventDirective;
}());
export { IntercomTrackEventDirective };
if (false) {
    /** @type {?} */
    IntercomTrackEventDirective.prototype.event;
    /** @type {?} */
    IntercomTrackEventDirective.prototype.intercomTrackEvent;
    /** @type {?} */
    IntercomTrackEventDirective.prototype.metadata;
    /**
     * @type {?}
     * @private
     */
    IntercomTrackEventDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvdHJhY2stZXZlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUU3QztJQVFFLHFDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSw2Q0FBTzs7O0lBRGQ7O1lBRVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7UUFDM0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzNDO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzVCO2FBQ0k7WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUE7U0FDOUY7SUFDSCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOzs7O2dCQUpPLFFBQVE7Ozt3QkFNYixLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFLTCxZQUFZLFNBQUMsT0FBTzs7SUFhdkIsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXJCWSwyQkFBMkI7OztJQUN0Qyw0Q0FBc0I7O0lBQ3RCLHlEQUFtQzs7SUFDbkMsK0NBQXNCOzs7OztJQUVWLCtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tVHJhY2tFdmVudF0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGV2ZW50OiBzdHJpbmdcbiAgQElucHV0KCkgaW50ZXJjb21UcmFja0V2ZW50OiBzdHJpbmdcbiAgQElucHV0KCkgbWV0YWRhdGE6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGUgPSB0aGlzLmV2ZW50ID8gdGhpcy5ldmVudCA6IHRoaXMuaW50ZXJjb21UcmFja0V2ZW50XG4gICAgaWYgKGUgJiYgdGhpcy5tZXRhZGF0YSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS50cmFja0V2ZW50KGUsIHRoaXMubWV0YWRhdGEpXG4gICAgfVxuICAgIGVsc2UgaWYgKGUgJiYgIXRoaXMubWV0YWRhdGEpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20udHJhY2tFdmVudChlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgaW4gaW50ZXJjb21UcmFja0V2ZW50IGRpcmVjdGl2ZTogWW91IG11c3Qgc3BlY2lmeSBhbiBldmVudCB0byB0cmFjay4nKVxuICAgIH1cbiAgfVxufVxuIl19