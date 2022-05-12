import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { reducers } from "./store/reducers";
import { GetRateEffect } from "./store/effects/getRate.effect";

import { HeaderCurrencyComponent } from './headerCurrency/headerCurrency.component';
import { ConversionUrrencyComponent } from './conversionСurrency/conversionСurrency.component';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ExchangeRateService } from './services/exchangeRate.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderCurrencyComponent,
    ConversionUrrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot({appState: reducers}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([GetRateEffect])
  ],
  providers: [ExchangeRateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
