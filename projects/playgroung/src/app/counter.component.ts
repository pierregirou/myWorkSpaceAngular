import { TemplateBindingParseResult } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector : 'app-counter',
    template : `
        <div class="counter">
            <h1>Compteur : {{initializeNumber}}</h1> 
            <button (click)="add()"> + Increment ({{stepper}})</button>
            <button (click)="delete()"> - Décrémente ({{stepper}}) </button>
        </div>
    `,
    styles : [`
        .counter{
            text-align: center
        }
        .counter h1{
            border: 1px solid black;
            border-radius:50px;
            padding:15px
        }
    `]
})
export class CounterComponent implements OnInit{
    @Input('step') stepper = 1
    @Input('initial-counter') initializeNumber = 0

    ngOnInit(){}

    add(){
        this.initializeNumber += this.stepper
    }

    delete(){
        this.initializeNumber -= this.stepper
    }

}