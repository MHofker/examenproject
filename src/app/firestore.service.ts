import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  addReservering(reserveringData) {
    this.afs.collection('Reserveringen').add(reserveringData).then(() => {
      console.log('Done');
    });
  }
  addBestelling(bestellingData) {
    this.afs.collection('Bestelling').add(bestellingData).then(() => {
      console.log('Done');
    });
  }
  addProducten(bestellingData) {
    this.afs.collection('Producten').add(bestellingData).then(() => {
      console.log('Done');
    });
  }
  getBestelling() {
    return this.afs.collection('Bestelling', ref => ref.orderBy('tijdstip')).valueChanges();
  }
  getReserveringen() {
    return this.afs.collection('Reserveringen', ref => ref.orderBy('tijdstip')).valueChanges();
  }
  getProducten() {
    return this.afs.collection('Producten', ref => ref.orderBy('naam')).valueChanges();
  }
}

