import { Observable, throwError } from 'rxjs';
import { IExperience } from './../../interfaces/experience';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experiences: IExperience[] | null;
  private url = 'api/experience';

  private changeSelectedExperienceSubject = new BehaviorSubject<IExperience | null>(null);
  changeSelectedExperienceAction$ = this.changeSelectedExperienceSubject.asObservable();

  changeSelectedExperience(selectedExperience: IExperience | null) : void{
    this.changeSelectedExperienceSubject.next(selectedExperience);
  }

  constructor(private http: HttpClient) { }

  getExperience(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(this.url)
    .pipe(
      tap(data => this.experiences = data),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error (err);
    return throwError (errorMessage);
  }
}
