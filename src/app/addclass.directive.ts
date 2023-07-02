import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAddclass]'
})
export class AddclassDirective {
@Input("appAddclass") set className(classobj:any){
  debugger;
  
  for (let index in classobj) {
if(classobj[index]==true)
{
  this.elmRef.nativeElement.classList.add(index);

}
    
  }
}
  constructor(private elmRef:ElementRef) { }

}
