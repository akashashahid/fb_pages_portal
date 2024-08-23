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
export class IntercomModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfig, useValue: config },
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20vIiwic291cmNlcyI6WyJzcmMvYXBwL25nLWludGVyY29tL2ludGVyY29tLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFBO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFBO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFBO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFBO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUE7QUE0QnpELE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXNCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUM5QztTQUNGLENBQUE7SUFDSCxDQUFDOzs7WUFsQ0YsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLDZCQUE2QjtvQkFDN0IsK0JBQStCO29CQUMvQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsMkJBQTJCO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQiw2QkFBNkI7b0JBQzdCLCtCQUErQjtvQkFDL0IscUJBQXFCO29CQUNyQix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULFFBQVE7b0JBQ1IsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgSW50ZXJjb21IaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2hpZGUuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3ctbmV3LW1lc3NhZ2UuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21TaG93RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3cuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21TaHV0ZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaHV0ZG93bi5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVRyYWNrRXZlbnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdHJhY2stZXZlbnQuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb20gfSBmcm9tICcuL2ludGVyY29tL2ludGVyY29tJ1xuaW1wb3J0IHsgSW50ZXJjb21Db25maWcgfSBmcm9tICcuL3NoYXJlZC9pbnRlcmNvbS1jb25maWcnXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBJbnRlcmNvbUhpZGVEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaHV0ZG93bkRpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVRyYWNrRXZlbnREaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEludGVyY29tSGlkZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlLFxuICAgIEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBJbnRlcmNvbSxcbiAgICBJbnRlcmNvbUNvbmZpZ1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJbnRlcmNvbUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW50ZXJjb21Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSW50ZXJjb20sXG4gICAgICAgIHsgcHJvdmlkZTogSW50ZXJjb21Db25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==