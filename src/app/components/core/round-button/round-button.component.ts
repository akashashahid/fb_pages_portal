import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  /**
  * properties to be used by the template
  */
 @Input() group: FormGroup;
 @Input() fieldType: string;
 @Input() description: string;
 @Input() class: string = "";
 @Input() color: string = "orange";
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
