import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { concat, concatMap, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  number: number;
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.number = 11
    this.http.get('https://pokeapi.co/api/v2/pokemon/1').pipe(
      map((resp)=>{
        return this.number
      }),
      tap((number)=>{
        console.log('1' +number)
      }),
      concatMap((num: any)=>{
       return this.http.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      }),
      tap(()=>{
        console.log('2')
      }),
      concatMap((num: any)=>{
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/10`)
      }),
      tap(()=>{
        console.log('3')
      }),
    ).subscribe((resp)=>{
      console.log(resp)
    })
  }
}
