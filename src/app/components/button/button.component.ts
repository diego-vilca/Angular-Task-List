import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClic = new EventEmitter();  

  onClick() {
    //console.log("Click!")
    this.btnClic.emit();
  }
}
