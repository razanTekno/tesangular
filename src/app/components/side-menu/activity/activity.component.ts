import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  loop:any[] = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
