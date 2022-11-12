import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-quiz',
  templateUrl: './carousel-quiz.component.html',
  styleUrls: ['./carousel-quiz.component.css']
})
export class CarouselQuizComponent implements OnInit {

  constructor() { }

  answered: boolean = false;
  answeredRight: boolean;

  ngOnInit(): void {
  }

  wrongAnswer(){
    console.log("WRONG");
    this.answered = true;
    this.answeredRight = false;
  }

  rightAnswer(){
    console.log("RIGHT");
    this.answered = true;
    this.answeredRight = true;
  }
}
