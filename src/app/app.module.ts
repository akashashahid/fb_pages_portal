import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "src/app/app.component";

/*Perfect Sidebar Module*/
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";

/*Import 3rd party Components*/
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

/*CoreUI Modules*/
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";

/*Import routing module*/
import { AppRoutingModule } from "src/app/app.routing";

/* Import logger */
import { NgxLoggerLevel, LoggerModule } from "ngx-logger";

/*services*/
import { TranslateService } from "src/app/services/translate/translate.service";

/*views*/
import { MainComponent } from "src/app/views/main/main.component";

/* components */
import { TextFieldComponent } from "src/app/components/core/text-field/text-field.component";
import { ButtonComponent } from "src/app/components/core/button/button.component";

/*pipes*/
import { TranslatePipe } from "src/app/pipes/translate/translate.pipe";

/*environment*/
import { environment } from "src/environments/environment";
import { ShowFormFieldErrorsComponent } from "src/app/components/core/show-form-field-errors/show-form-field-errors.component";
import { RoundButtonComponent } from "./components/core/round-button/round-button.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

/**
 * This function initializes the TranslateService for use in application
 *
 * @method setupTranslateFactory
 * @param service
 * @return
 */
export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use(environment.lang);
}
/**
 * It is a global place for creating, registering and retrieving AngularJS modules.
 * All modules that should be available in the application must be registered using this
 * mechanism.
 */
@NgModule({
  /*
   * Declarations are to make directives (including components and pipes) from the current module available to other directives in the current module.
   * Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
   */
  declarations: [
    AppComponent,
    MainComponent,
    TranslatePipe,
    TextFieldComponent,
    ButtonComponent,
    ShowFormFieldErrorsComponent,
    RoundButtonComponent,
  ],
  /**
   *
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true
    }),
    MDBBootstrapModule.forRoot(),
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    BsDropdownModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    AppRoutingModule,
    //  Relies on variable within environment configuration. If isDebugMode true it will show log
    LoggerModule.forRoot({
      level: environment.loggerLevel,
      disableConsoleLogging: environment.disableConsoleLogging,
      // serverLogLevel
      serverLogLevel: NgxLoggerLevel.OFF,
    }),
    NgbModule
  ],
  /**
   * Providers are to make services and values known to DI. They are added to the root scope and they are injected to other services
   * or directives that have them as dependency.
   */
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true,
    },
    TranslatePipe,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],


})
export class AppModule { }
