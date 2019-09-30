import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from './Services/movie-service.service';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'movie-app';
  myMovies:any = [];

  constructor(private movieService:MovieServiceService){}

 ngOnInit(){
    this.movieService.getMovieInfo().subscribe((data)=>{
      this.myMovies = data.Search;
      console.log(this.myMovies);
    });
  }

}