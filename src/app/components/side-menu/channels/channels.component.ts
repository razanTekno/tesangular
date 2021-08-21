import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  loop:any[] = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
