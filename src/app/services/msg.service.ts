import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


import { Observable } from 'rxjs';
import { MsgErrorLayoutComponent } from './msg-error-layout.component';
import { MsgSuccessLayoutComponent } from './msg-success-layout.component';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  config : MatSnackBarConfig = {
    horizontalPosition: 'end',
    verticalPosition: 'top'
  };

  constructor(
    private _msg: MatSnackBar,
    private _dialog: MatDialog,
  ) {}

  success(message: string){
    this._msg.openFromComponent(MsgSuccessLayoutComponent, {
      data: message,
      ...this.config
    });
  }

  error(message: string){
    this._msg.openFromComponent(MsgErrorLayoutComponent, {
      data: message,
      ...this.config
    });
  }



}