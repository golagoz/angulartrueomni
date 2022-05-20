import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  // onCardChange : BehaviorSubject<any>;
  onCardChange: BehaviorSubject<any>;
  onByCard: BehaviorSubject<any>;
  _methodBuscar: string;

  constructor(
    private _api: ApiService

  ) {   
    this._methodBuscar = 'GetBy'
    this.getAll()
    this.onCardChange = new BehaviorSubject([]);
    this.onByCard = new BehaviorSubject([]);
  }
  

  getAll(): Promise<any>{
    return this._api.get('getcards', this.onCardChange, environment.cardUrl);
  }

  getSummary(id: number) : Promise<any>{
    return this._api.get(`${this._methodBuscar}/${id}/`, this.onByCard);
  }
  // resolve() {
  //   return this._api.resolver([
  //     this.getAll()
  //   ]);
  // }

}
