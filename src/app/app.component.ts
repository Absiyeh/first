import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post=[{
title:"first"
  },
  {
    title:"second"
      },
      {
        title:"third"
          },
]
  title = 'first word';
 password:string;
check:boolean=false;
typetext:string="";

  constructor() {
    this.password=""
  }


  clickme(){
this.password="salam";
this.check=!this.check;
  }

//   onChangelength(event: Event){
// alert((event.target as HTMLInputElement).value)

//   }

  onChangelength(event: string){

this.typetext=event;
  }

  checkistrue(first:string,second:string):string{

if(first===second && this.typetext!=="" )
{
return "correct";
}
else if(first!==second && this.typetext!==""){
  return "incorrect";

}
else{
  return "";
}
  }

}
