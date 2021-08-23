import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  error = new Subject<string>();
  private _videos = new BehaviorSubject<any[]>([]);

  private readonly url:string = environment.googleapis;
  private readonly key:string = environment.apikey;

  constructor(private http: HttpClient) {}

  fetchVideos(){
    let listVid:any[] = [];
    let searchParams = new HttpParams();
    searchParams = searchParams.append('key', `${this.key}`);
    searchParams = searchParams.append('type', 'video');
    searchParams = searchParams.append('part', 'snippet');
    searchParams = searchParams.append('q', 'angular');
    return this.http
      .get(`${this.url}youtube/v3/search`,{params: searchParams})
      .pipe(
       tap(data =>{
        let tmp:any = data;
        listVid = tmp.items;
        this._videos.next(listVid)
       }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
  get videos() {
    return this._videos.asObservable();
  }
}
