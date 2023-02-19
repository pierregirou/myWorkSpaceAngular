import { TemplateBindingParseResult } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector : 'app-counter',
    template : `
        <div class="counter">
            <button (click)="add()">Ajouter</button>
            <h1>{{initializeNumber}}</h1>
            <button (click)="delete()">Enlever</button>
        </div>
    `,
    styles : [`
        .counter{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .counter h1{
            border: 1px solid black;
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