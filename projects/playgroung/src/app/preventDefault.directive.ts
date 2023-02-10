import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:'[preventDefault]',
})
export class PreventDefault{
    constructor(){}

    @HostListener('click', ['$event'])
    click(event:Event){
        event.preventDefault()
    }
    
}