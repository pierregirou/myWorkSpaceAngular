import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-directive';
  inputChildComponent: string = 'en attente ... ';
  clientXY: any
  constructor(){}

  ngOnInit(){
    // setInterval(()=>{
    //   this.inputChildComponent += this.inputChildComponent
    // },2000)
  }

}
