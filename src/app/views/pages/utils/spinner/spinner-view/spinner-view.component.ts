import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'kt-spinner-view',
  templateUrl: './spinner-view.component.html',
  styleUrls: ['./spinner-view.component.scss']
})
export class SpinnerViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SpinnerViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
