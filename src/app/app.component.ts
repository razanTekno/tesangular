import { Component, ViewChild, AfterViewInit, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('divcontainer') divcontainer: any;

  constructor(
    private render: Renderer2
  ){
  }
  ngAfterViewInit(){
    //
    console.log(this.divcontainer)
  }
  remove(){

  }
  onResize(e:any){
    if(e.target.innerWidth < 992){
      this.render.removeClass(this.divcontainer.nativeElement, 'container');
    }  if(e.target.innerWidth > 992){
      this.render.addClass(this.divcontainer.nativeElement, 'container');
    }
  }
}
