import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Observable} from 'rxjs';
import {FirestoreService} from '../firestore.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {DataSource} from '@angular/cdk/table';

// export interface Food {
//   value: string;
//   viewValue: string;
// }


@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.css']
})
export class BestellingenComponent implements OnInit {

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }
  constructor(private bestelling: FirestoreService, private afs: AngularFirestore, private fb: FormBuilder) {
    let queryRef = afs.collection('producten', ref => ref.where('name', '==', 'large'));
  }

  myForm: FormGroup;

  bestellingDetails = {
    reserveringid: '',
    besteldeItems: '',
    tafel: '',
    tijdstip: ''
  };
  displayedColumns: string[] = ['tijdstip', 'tafel', 'reserveringid', 'besteldeItems' ];
  dataSource = new BestellingDataSource(this.bestelling);

  Bestelling: Observable<any[]>;
  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];
  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });

  }

  addPhone() {

    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
  addBestelling() {
    this.bestelling.addBestelling(this.bestellingDetails);
  }





}
export class BestellingDataSource extends DataSource<any> {

  constructor(private bestelling: FirestoreService) {
    super();
  }

  connect() {
    return this.bestelling.getBestelling();
  }

  disconnect() {

  }
}
