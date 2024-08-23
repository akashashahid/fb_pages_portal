import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
* Generic text field component
*/
export class TextFieldComponent implements OnInit {

  /**
  * Properties to be used by the template
  */
  @Input() group: FormGroup;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() class: string;
  @Input() id: string;
  @Input() autoComplete: string;
  @Input() formControlName: string;


  constructor() {}

  ngOnInit() {}

}
