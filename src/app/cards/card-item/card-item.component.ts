import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  animations: [
    trigger('animateStagger', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])]
})

export class CardItemComponent implements OnInit {
  @Input() item: any;
  @Input() name: string = "Ed";
  // @Input() teamId: number;

  summary : any;
  summaryLoading: boolean;

  constructor(
    private _serviceCard_ :CardService
  ) { 
    this.summaryLoading = false;
    this.summary = [];
    
  }
  flip: string = 'inactive';
  ngOnInit(): void {    
    console.log(this.name);
  }

  toggleFlip() {
  
  }
  more(){
  
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    ///GEt detail of company
    // listingID
    this.summaryLoading = true;
    this._serviceCard_
        .getSummary(this.item.listingID)
        .then(s => 
          this.summary = s
        
        ).finally();
       

  }


}
