import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from './Services/movie-service.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


  constructor(private movieService:MovieServiceService){}

 ngOnInit(){
  
  }

}