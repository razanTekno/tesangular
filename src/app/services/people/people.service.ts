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
export class PeopleService {
  error = new Subject<string>();
  private _people = new BehaviorSubject<any[]>([]);

  private readonly url:string = environment.dummyapi;
  private readonly key:string = environment.keydummyapi;

  constructor(private http: HttpClient) {}

  fetchPeople(){
    let listpeople:any[] = [];
    let headers = new HttpHeaders();
    headers = headers
      .set('app-id', this.key);

    return this.http
      .get(`${this.url}user?page=1&limit=5`,{headers: headers})
      .pipe(
       tap(data =>{
        let tmp:any = data;
        listpeople = tmp.data;
        this._people.next(listpeople)
       }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
  get people() {
    return this._people.asObservable();
  }
}
