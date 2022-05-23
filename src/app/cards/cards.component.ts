import { animate, animateChild, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { CardService } from '../card.service';
import { OmniAnimations } from '../custom-animation';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent implements OnInit, OnDestroy {
  cards: any[];
  data: Observable<any[]> = new Observable();


  private _unsubscribeAll: Subject<any>;
  constructor(
    private _serviceCard_ :CardService
  ) {
    
    this._unsubscribeAll = new Subject();
    this.cards = [];
    this._serviceCard_.onCardChange
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(response => {
      if(!response) return;      
      this.cards = response.map((s: any) => ({...s, assign: null}));
      this._assignCard(response);

    });
    // this.cards = [10, 98, 2, 5, 3, 4, 54, 7, 10, 11, 32, 4];

    // this.data = _serviceCard_.onCardChange.asObservable();
    // console.log(this.data);
    
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
   
  flip: string = 'inactive';

   toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


  private _assignCard(setAssign: any[])
  {
    this.cards.forEach( i => 
      i.setAssign = setAssign.find( a=> a.listingID === i.listingID));

  }

  ngOnInit(): void {
    this._serviceCard_.getAll();
  }

}
