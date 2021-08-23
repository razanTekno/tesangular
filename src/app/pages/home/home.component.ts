import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideosService } from 'src/app/services/videos/videos.service';
import { PeopleService } from 'src/app/services/people/people.service';
import { forkJoin, Subscription } from 'rxjs';
import { take, map, tap, switchMap, catchError, concatMap, finalize, timeout, retryWhen, delayWhen, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  listVideos:any[] = [];
  listPeople:any[] = [];
  videosSub: any;
  peopleSub: any;
  constructor(
    private vidService: VideosService,
    private peopleService:PeopleService
  ) {
    forkJoin({
      videos: this.vidService.fetchVideos(),
      people: this.peopleService.fetchPeople()
    }).pipe(
      tap(({ people }) => {
        console.log(">>>>>>>>>>>>>>>", people)
      }),
    ).subscribe(data => {
      console.log("success loaded data",data)
    }, async error => {
      console.log(error)
    }
    )
  }

  ngOnDestroy() {
    if (this.videosSub) {
      this.videosSub.unsubscribe();
    }
    if (this.peopleSub) {
      this.peopleSub.unsubscribe();
    }
  }

  async ngOnInit() {
    this.videosSub = this.vidService.videos.subscribe(data => {
      this.listVideos = data;
    })
    this.peopleSub = this.peopleService.people.subscribe(data => {
      this.listPeople = data;
      console.log(this.listPeople)
    })
  }
}
