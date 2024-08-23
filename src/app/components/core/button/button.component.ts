import { Component, ViewEncapsulation, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
* generic button component
*/
export class ButtonComponent implements OnInit{

  /**
  * properties to be used by the template
  */
  @Input() group: FormGroup;
  @Input() type: string;
  @Input() description: string;
  @Input() class: string;
  @Output() callFunction = new EventEmitter();

  constructor(){ }

  /**
  * Initialize a FormGroup instance
  */
  ngOnInit(){
    this.group = new FormGroup({});
  }

  /**
  * Binds the parent function to the click event on the button. (Data down action up)
  */
  onClick(event){
    this.callFunction.emit(event);
  }

}
