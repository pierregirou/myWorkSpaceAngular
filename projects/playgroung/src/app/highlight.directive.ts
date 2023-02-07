import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[highlight]'
})
export class HighLightDirective{
    constructor(private elementRef:ElementRef<HTMLElement>){}

    /**
     * Les directive sont la pour rendre plus puissant le HTML lui donne plus de possibilitées
     * HostListener est comme un addEventListener mais declaratif et non imperatif
     * @param clientX 
     * @param clientY 
     */
    @HostListener('mouseenter', ['$event.clientX', '$event.cleintY'])
    onMouseOver(clientX:number,clientY:number){
        console.log(clientX,clientY)
    }
}