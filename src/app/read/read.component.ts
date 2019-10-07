import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../Services/movie-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  
  myMovies:any = [];

  constructor(private movieService:MovieServiceService){}

 ngOnInit(){
    this.movieService.getMovieInfo().subscribe((data)=>{
      this.myMovies = data.Search;
      console.log(this.myMovies);
    });
  }
}
