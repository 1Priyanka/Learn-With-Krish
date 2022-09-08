import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';


@Component({
  selector: 'em-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  //progress: number = 50;
  color: string = ''
  @Input() progress: number = 0;
  @Input() firstName: string = ''
  @Output() progressClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (this.progress < 0 || this.progress > 100) {
      this.progress = 0;

    }
    if (this.progress > 75) {
      this.color = 'yellow'
    } else if (this.progress > 50) {
      this.color = 'purple'
    } else if (this.progress < 35) {
      this.color = 'red'

    } else {
      this.color = 'green'
    }
  }

  onClick() {
    this.progressClick.emit(` ${this.firstName}'s Progress is ${this.progress} %`);
  }

}
