import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'msg-error-component',
  templateUrl: 'msg-error-layout.html',
})
export class MsgErrorLayoutComponent {
  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}