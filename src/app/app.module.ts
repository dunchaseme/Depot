import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RequestCollector } from './request-collector/request-collector';
import { CollectorListing } from './collector-listing/collector-listing';
import { SearchCollector } from './search-collector/search-collector';
import { ConfirmCollector } from './confirm-collector/confirm-collector';
import { Deposit } from './deposit/deposit';
import { ParcelEnquiry } from './parcel-enquiry/parcel-enquiry';
import { CollectorParcel } from './collector-parcel/collector-parcel';
import { ConfirmPickup } from './confirm-pickup/confirm-pickup';
import { BuyerQR } from './buyer-qr/buyer-qr';
import { ParcelQR } from './parcel-qr/parcel-qr';
import { Home } from './home/home';

@NgModule({
  declarations: [
    AppComponent,
    RequestCollector,
    CollectorListing,
    SearchCollector,
    ConfirmCollector,
    Deposit,
    ParcelEnquiry,
    CollectorParcel,
    ConfirmPickup,
    BuyerQR,
    ParcelQR,
    Home
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
