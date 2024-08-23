/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomTrackEventDirective {
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
        const e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    }
}
IntercomTrackEventDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomTrackEvent]'
            },] }
];
/** @nocollapse */
IntercomTrackEventDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomTrackEventDirective.propDecorators = {
    event: [{ type: Input }],
    intercomTrackEvent: [{ type: Input }],
    metadata: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2RpcmVjdGl2ZXMvdHJhY2stZXZlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUs3QyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBS3RDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLE9BQU87O2NBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7UUFDM0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQzNDO2FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzVCO2FBQ0k7WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUE7U0FDOUY7SUFDSCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFKTyxRQUFROzs7b0JBTWIsS0FBSztpQ0FDTCxLQUFLO3VCQUNMLEtBQUs7c0JBS0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFQckIsNENBQXNCOztJQUN0Qix5REFBbUM7O0lBQ25DLCtDQUFzQjs7Ozs7SUFFViwrQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVRyYWNrRXZlbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVRyYWNrRXZlbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBldmVudDogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tVHJhY2tFdmVudDogc3RyaW5nXG4gIEBJbnB1dCgpIG1ldGFkYXRhOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBlID0gdGhpcy5ldmVudCA/IHRoaXMuZXZlbnQgOiB0aGlzLmludGVyY29tVHJhY2tFdmVudFxuICAgIGlmIChlICYmIHRoaXMubWV0YWRhdGEpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20udHJhY2tFdmVudChlLCB0aGlzLm1ldGFkYXRhKVxuICAgIH1cbiAgICBlbHNlIGlmIChlICYmICF0aGlzLm1ldGFkYXRhKSB7XG4gICAgICB0aGlzLmludGVyY29tLnRyYWNrRXZlbnQoZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGluIGludGVyY29tVHJhY2tFdmVudCBkaXJlY3RpdmU6IFlvdSBtdXN0IHNwZWNpZnkgYW4gZXZlbnQgdG8gdHJhY2suJylcbiAgICB9XG4gIH1cbn1cbiJdfQ==