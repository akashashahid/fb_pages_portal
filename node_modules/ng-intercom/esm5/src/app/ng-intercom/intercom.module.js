/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import { Intercom } from './intercom/intercom';
import { IntercomConfig } from './shared/intercom-config';
var IntercomModule = /** @class */ (function () {
    function IntercomModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    IntercomModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfig, useValue: config },
            ]
        };
    };
    IntercomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule
                    ],
                    declarations: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    exports: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    providers: [
                        Intercom,
                        IntercomConfig
                    ]
                },] }
    ];
    return IntercomModule;
}());
export { IntercomModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2ludGVyY29tLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFBO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUFHekQ7SUFBQTtJQW1DQSxDQUFDOzs7OztJQVRRLHNCQUFPOzs7O0lBQWQsVUFBZSxNQUFzQjtRQUNuQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULFFBQVE7Z0JBQ1IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDOUM7U0FDRixDQUFBO0lBQ0gsQ0FBQzs7Z0JBbENGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1oscUJBQXFCO3dCQUNyQiw2QkFBNkI7d0JBQzdCLCtCQUErQjt3QkFDL0IscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIsNkJBQTZCO3dCQUM3QiwrQkFBK0I7d0JBQy9CLHFCQUFxQjt3QkFDckIseUJBQXlCO3dCQUN6QiwyQkFBMkI7cUJBQzVCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxRQUFRO3dCQUNSLGNBQWM7cUJBQ2Y7aUJBQ0Y7O0lBV0QscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQVZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBJbnRlcmNvbUhpZGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGlkZS5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LW1lc3NhZ2VzLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNob3dEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvdy5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NodXRkb3duLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmFjay1ldmVudC5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbSB9IGZyb20gJy4vaW50ZXJjb20vaW50ZXJjb20nXG5pbXBvcnQgeyBJbnRlcmNvbUNvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2ludGVyY29tLWNvbmZpZydcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEludGVyY29tSGlkZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlLFxuICAgIEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW50ZXJjb21IaWRlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93RGlyZWN0aXZlLFxuICAgIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUsXG4gICAgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEludGVyY29tLFxuICAgIEludGVyY29tQ29uZmlnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEludGVyY29tQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJbnRlcmNvbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJbnRlcmNvbSxcbiAgICAgICAgeyBwcm92aWRlOiBJbnRlcmNvbUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19