import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {DataSource} from '@angular/cdk/collections';
import {FirestoreService} from '../firestore.service';



// export interface ReserveringData {
//   datum: number;
//   tijd: number;
//   tafel: number;
//   naam: string;
//   telefoon: number;
//   aantalPersonen: number;
//   reserveringgebruikt: boolean;
// }

// const ELEMENT_DATA: ReserveringData[] = [

//   {datum: 1, tijd: 1, tafel: 3, naam: 'Hydrogen', telefoon: 123456, aantalPersonen: 2, reserveringgebruikt: true},
//   {datum: 1, tijd: 3, tafel: 5, naam: 'Hydrogen', telefoon: 123143, aantalPersonen: 4, reserveringgebruikt: false},

// ]

@Component({
  selector: 'app-reserveringen',
  templateUrl: './reserveringen.component.html',
  styleUrls: ['./reserveringen.component.css']
})
export class ReserveringenComponent implements OnInit {

   reserveringDetails = {
    Bestellingid: '',
    AantalPersonen: '',
    naam: '',
    reserveringgebruikt: '',
    tafel: '',
    telefoon: '',
    tijdstip: ''
  };
  displayedColumns: string[] = ['tijdstip', 'tafel', 'naam', 'telefoon', 'AantalPersonen', 'reserveringgebruikt', ];
  dataSource = new ReserveringDataSource(this.reservering);

  Reserveringen: Observable<any[]>;
  constructor(private reservering: FirestoreService, private afs: AngularFirestore) {

  }
  addReservering() {
 this.reservering.addReservering(this.reserveringDetails);
  }

  ngOnInit(): void {
  }



}
export class ReserveringDataSource extends DataSource<any> {

  constructor(private reservering: FirestoreService) {
    super();
  }

  connect() {
    return this.reservering.getReserveringen();
  }

  disconnect() {

  }
}
