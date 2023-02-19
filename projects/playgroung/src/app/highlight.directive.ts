import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: 'p[highlight]'
})
export class HighLightDirective implements OnInit {
    bgcolor = 'transparent'
    constructor(private elementRef: ElementRef<HTMLElement>) { }

    ngOnInit() {
        this.bgcolor = this.backgroundColor
        console.log(this.bgcolor)
    }

    /**
     * recupere la valeur d'un attribut
     * par default il vaudra yellow mais sinon il recupere la valeur
     * de l'attribut bg depuis le DOM
     */
    @Input('bg')
    backgroundColor = 'yellow'


    /**
     * Les directive sont la pour rendre plus puissant le HTML lui donne plus de possibilitées
     * HostListener est comme un addEventListener mais declaratif et non imperatif
     * @param clientX 
     * @param clientY 
     */
    @HostListener('mouseenter', ['$event.target', '$event.clientX', '$event.clientY'])
    onMouseOver(ev: any, clientX: number, clientY: number) {
        console.log(ev, clientX, clientY)
        console.log(this.backgroundColor);
        ev.style.backgroundColor = this.bgcolor

    }

    /**
     * Les directive sont la pour rendre plus puissant le HTML lui donne plus de possibilitées
     * HostListener est comme un addEventListener mais declaratif et non imperatif
     * @param clientX 
     * @param clientY 
     */
    @HostListener('mouseleave', ['$event.target', '$event.clientX', '$event.clientY'])
    onMouseLeave(ev: any, clientX: number, clientY: number) {
        console.log(clientX, clientY)
        ev.style.backgroundColor = 'transparente'
    }
}