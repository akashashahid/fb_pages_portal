import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TranslatePipe } from "src/app/pipes/translate/translate.pipe";

@Component({
  selector: "show-field-errors",
  templateUrl: "./show-form-field-errors.component.html",
  styleUrls: ["./show-form-field-errors.component.scss"],
})
export class ShowFormFieldErrorsComponent implements OnInit {
  constructor(private translate: TranslatePipe) { }

  private static readonly errorMessages = {
    required: () => `This field is required`,
    email: () => `Invalid email address`,
    minlength: (params) =>
      `The min number of characters is  ${params.requiredLength}`,
    maxlength: (params) =>
      `The max allowed number of characters is ${params.requiredLength}`,
    pattern: (params) =>
      `${ShowFormFieldErrorsComponent.getPatternMessage(params)}`,
    years: (params) => params.message,
    countryCity: (params) => params.message,
    uniqueName: (params) => params.message,
    telephoneNumbers: (params) => params.message,
    telephoneNumber: (params) => params.message,
    requiredTrue: () => `Checkbox needs to be checked`,
    notUniqueTrackingNum: () =>
      `This tracking number has been entered before.`,
  };

  private static readonly patternsMessages = {
    "^[a-zA-Z0-9]*$": `Only letters and numeric values allowed.`,
    "^[0-9]*$": `Numbers Only`,
    "^[0-9]{1,10}$": `Must be 10 digits. Numbers Only`,
    "^[1-9][0-9]*$": `Must be greater than zero`,
    "^\\s*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\s*$": `Invalid Email Address`,
  };

  @Input() control: FormControl;
  /**
   * This is the hook called on the initialization of the component, it initializes
   * the form.
   */
  ngOnInit() { }
  shouldShowErrors(): boolean {
    return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    );
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) =>
      this.getMessage(field, this.control.errors[field])
    );
  }

  private getMessage(type: string, params: any) {
    return ShowFormFieldErrorsComponent.errorMessages[type](params);
  }

  private static getPatternMessage(params: any) {
    if (
      params.requiredPattern in ShowFormFieldErrorsComponent.patternsMessages
    ) {
      return ShowFormFieldErrorsComponent.patternsMessages[
        params.requiredPattern
      ];
    }
    return `The required pattern is: ${params.requiredPattern}`;
  }
}
