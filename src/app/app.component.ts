import { Component, ViewChild, AfterViewInit, Renderer2, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('divcontainer') divcontainer: any;

  public innerWidth: any;
  ngOnInit() {

  }
  constructor(
    private render: Renderer2
  ){ }
  ngAfterViewInit(){
    this.innerWidth = window.innerWidth;
      if(this.innerWidth < 992){
        this.render.removeClass(this.divcontainer.nativeElement, 'container');
      }  if(this.innerWidth > 992){
        this.render.addClass(this.divcontainer.nativeElement, 'container');
      }
  }

  onResize(e:any){
   this.resize(e);
  }
  resize(e:any){
    if(e.target.innerWidth < 992){
      this.render.removeClass(this.divcontainer.nativeElement, 'container');
    }  if(e.target.innerWidth > 992){
      this.render.addClass(this.divcontainer.nativeElement, 'container');
    }
  }
}
