import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'msg-success-component',
  templateUrl: 'msg-success-layout.html',
})
export class MsgSuccessLayoutComponent {
  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}