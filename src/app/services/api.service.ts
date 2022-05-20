import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { MsgService } from './msg.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiUrl = environment.cardUrl;

  constructor(
    private _httpClient: HttpClient,
    private _msg: MsgService,
   
    ) {}


    changeApiUrl(newApiUrl: string): void{
      this._apiUrl = newApiUrl;
    }
  

    get(apiModuleUrl: string, subject: BehaviorSubject<any[]>, url: string = ''): Promise<any> {
    this.changeApiUrl((url !== '') ? url : environment.cardUrl);
    
    return new Promise<any>((accept, reject) => {
      this._httpClient
          .get<any[]>(this._apiUrl + apiModuleUrl)
          .subscribe(x => {
         
            if (subject){
                subject.next(x);
            }
            accept(x);
          }, e => {            
            this._exceptionHandler(e);
            reject(e);
          });
    });
  }
    
  private _exceptionHandler(e: any): void{
    let errorMessage = '';
    
    if (e.error && e.error.exceptionMessage){
        errorMessage = `${e.error.exceptionMessage}`;
    }
    else if (e.statusText === 'Unknown Error'){
        errorMessage = 'Ocurrio un error inesperado, comunicate con el administrador.';
    }
    this._msg.error(errorMessage);
  }

  // resolver(promises: Promise<any>[]): Observable<any> | Promise<any> | any {
  //   return new Promise((resolve, reject) => {
  //     Promise.all(promises)
  //     .then(
  //       () => {
  //         resolve()
  //       }, reject
  //     );
  //   });
  // }


}
