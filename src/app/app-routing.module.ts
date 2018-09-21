import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { Home } from './home/home';
import { BuyerQR } from './buyer-qr/buyer-qr';
import { CollectorListing } from './collector-listing/collector-listing';
import { CollectorParcel } from './collector-parcel/collector-parcel';
import { ConfirmCollector } from './confirm-collector/confirm-collector';
import { Deposit } from './deposit/deposit';
import { ParcelEnquiry } from './parcel-enquiry/parcel-enquiry';
import { ParcelQR } from './parcel-qr/parcel-qr';
import { RequestCollector } from './request-collector/request-collector';
import { SearchCollector } from './search-collector/search-collector';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
  { path: 'buyerqr', component: BuyerQR },
  { path: 'collectorlisting', component: CollectorListing },
  { path: 'collectorparcel', component: CollectorParcel },
  { path: 'confirmcollector', component: ConfirmCollector },
  { path: 'deposit', component: Deposit },
  { path: 'parcelenquiry', component: ParcelEnquiry },
  { path: 'parcelqr', component: ParcelQR },
  { path: 'requestcollector', component: RequestCollector },
  { path: 'searchcollector', component: SearchCollector },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
