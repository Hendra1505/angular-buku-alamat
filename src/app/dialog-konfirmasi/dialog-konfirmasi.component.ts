import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-konfirmasi',
  templateUrl: './dialog-konfirmasi.component.html',
  styleUrls: ['./dialog-konfirmasi.component.scss']
})
export class DialogKonfirmasiComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogKonfirmasiComponent>
  ) { }

  ngOnInit(): void {
  }

  konfirmasi() {
    this.dialogRef.close(true);
  }



}
