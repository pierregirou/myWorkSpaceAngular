import { Directive, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: "a[comfirm]"
})
export class ConfirmDirective implements OnInit {
    messageConfirm: string = "tu veux partir ?"

    /**
     * @Input recupere la valeur de l'attribut s'il est renseigné
     * confirm-message en paramètre est le nom de l'attribut HTML
     */
    @Input('confirm-message')
    messageConfirmPrerempli: string = this.messageConfirm

    ngOnInit() {
        /**
         * je donne une nouvelle valeur ici a 
         * si il est renseigné en attribut HTML car avant le ngOnInit il effectuer
         * la lecture de tous les Décorateur @Input , @diractive et autres
         */
        this.messageConfirm = this.messageConfirmPrerempli
    }

    @HostListener('click')
    confirmlien(): Boolean | void {
        const response = confirm(this.messageConfirm)
        return response ? true : false
    }
}