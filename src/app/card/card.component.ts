import { Component, Input } from '@angular/core';
import {UpperCasePipe} from '@angular/common'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() title:string=""

}
