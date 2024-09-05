import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "src/app/app.component";


/*Import 3rd party Components*/
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


/*Import routing module*/
import { AppRoutingModule } from "src/app/app.routing";

/* Import logger */

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
import { NavheaderComponent } from './views/navheader/navheader.component';
import { ConversationsComponent } from "./views/conversations/conversations.component";

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
    ConversationsComponent,
    TranslatePipe,
    TextFieldComponent,
    ButtonComponent,
    ShowFormFieldErrorsComponent,
    RoundButtonComponent,
    NavheaderComponent
  ],
  /**
   *
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    AppRoutingModule,
    //  Relies on variable within environment configuration. If isDebugMode true it will show log

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
