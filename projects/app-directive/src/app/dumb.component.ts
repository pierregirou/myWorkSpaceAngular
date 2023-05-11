import { ViewEncapsulation } from "@angular/compiler";
import { Component, Input, OnInit,AfterViewChecked, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-dumb',
    template: `
        <h1>DUMB Component</h1>

        <div #afficheResult style="background-color: var(--bs-light-border-subtle)" >
        </div>
        <div *ngIf="client">{{ client.clientX }} - {{ client.clientY }}</div>
    `,
    styles: [``],
})
export class DumbComponent implements OnInit,AfterViewChecked{
    @Input('myInput') info:string
    @Input('clientInput') client: any
    @ViewChild('afficheResult') myParagraphe:ElementRef
    constructor(){}

    ngOnInit(){
        
        console.log(this.info)
    }

    ngAfterViewChecked(){
         console.log(this.myParagraphe)
         if(this.myParagraphe){
             this.myParagraphe.nativeElement.innerHTML = `<p>${this.info}</p>`
         }
    }

}
