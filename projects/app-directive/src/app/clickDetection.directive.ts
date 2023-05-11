import { Directive, ElementRef, HostListener, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { AppComponent } from "./app.component";
import { DumbComponent } from "./dumb.component";

@Directive({
    selector:'[clickDetection]'
})
export class ClickDirective{
    constructor(private elem:ElementRef<HTMLElement>,private smartComp:AppComponent){}

    /**
     * au click je recupere l'element passer en constructor
     */
    @HostListener('click')
    clickDetected(){
        console.log(this.elem.nativeElement.getAttribute('data-info'))
        let getDataInfo = this.elem.nativeElement.getAttribute('data-info')
        if(getDataInfo)
        this.smartComp.inputChildComponent = `Click sur le ${getDataInfo}` 
    }

     /**
     * au hover je recupere les element souhaiter dans @HostListener
     */
     @HostListener('mouseenter', ['$event.clientX', '$event.clientY'])
     hoverDetected(clientX:number,clientY:number){
         console.log(clientX,clientY)
         this.smartComp.clientXY = {clientX,clientY}
     }
}