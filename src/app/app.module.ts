import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { ReserveringenComponent } from './reserveringen/reserveringen.component';
import { GegevensComponent } from './gegevens/gegevens.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverzichtenComponent } from './overzichten/overzichten.component';
import {MatButtonModule} from '@angular/material/button';
import {
  MatCardModule,
  MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BonComponent } from './bon/bon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

const appRoutes: Routes = [
  { path: 'bestellingen', component: BestellingenComponent },
  { path: 'reserveringen', component: ReserveringenComponent },
  { path: 'overzichten', component: OverzichtenComponent },
  { path: 'bon', component: BonComponent },
  {
    path: 'gegevens',
    component: GegevensComponent,
    data: { title: 'gegevens' }
  },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BestellingenComponent,
    ReserveringenComponent,
    GegevensComponent,
    PageNotFoundComponent,
    OverzichtenComponent,
    BonComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}),
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
