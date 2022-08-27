import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SpinnerViewComponent } from './spinner/spinner-view/spinner-view.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private router: Router, private dialog: MatDialog) { }

  start(message?): MatDialogRef<SpinnerViewComponent> {

    const dialogRef = this.dialog.open(SpinnerViewComponent, {
      disableClose: true,
      data: message == '' || message == undefined ? "Loading..." : message
    });
    return dialogRef;
  };

  stop(ref: MatDialogRef<SpinnerViewComponent>) {
    ref.close();
  }
}
