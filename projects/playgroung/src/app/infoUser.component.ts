import { Component, Input } from "@angular/core";

@Component({
    selector: 'appUser',
    template: `
        <h3 [class.nameOfClass]="isworking" >{{ lastName }} {{ firstName | uppercase }}</h3>
        <img [src]="azard" alt="">
        <div *ngIf="job != 'N/A' ">
            <div>Job :  <strong>{{ job }}</strong> {{ salaire | currency: 'EUR': 'symbol' }} </div>
            <button (click)="embaucher()">Trouver un JOB</button>
        </div>
        <div>
            <p>Embauché : {{isworking}}</p>
            <input (keyup.enter)="onKeydown($event)" type="text" placeholder="Saisir votre nom"/>    
        </div>
    `,
    styles: [
        `
        .nameOfClass{
            background-color:green;
        }
    `
    ]
})


export class UserInfoComponent {

    /***
     * si le nom de la variable est la même que celui de l'attrubut directive alors 
     * pas besoin de lui dire exemple: @Input('attributHtml') attName = ''
     */
    @Input() lastName = '';
    @Input() firstName = '';
    @Input() job = '';
    @Input('hired') isworking = false;
    salaire: number = 1420;
    azard:string = "http://www.placeholder.com/30";

    
    embaucher(){
        this.isworking = !this.isworking;
    }


    onKeydown(event:any){
        console.log(event);
        this.firstName = event.target.value
        
    }

}