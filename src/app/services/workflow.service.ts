import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError as _throw } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WorkFlowService {

    constructor(private http: HttpClient) {}

/**
 * Create workflow.
 * @param model with value-
 * @return true or false
 **/
  public createWorkFlow(model: any): Observable<any> {
    const body: string = JSON.stringify(model);
    // Sends an authenticated request.
    return this.http.post('/api/otp/GenerateOTP', body).pipe(
      map((response: Response) => {
        return response;
      }),
      catchError((error: any) => {
        return _throw(error);
      }));
  }
}
