import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import { ExchangeRateInterface } from './types/exchangeRate.interface';
import { getRateAction } from "./store/actions/getRate.actions";
import { selectLoading, selectRate } from "./store/selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean>
  public currency!: Observable<ExchangeRateInterface[]>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getRateAction());
    this.initCurrency();
  }

  private initCurrency(): void {
    this.isLoading$ = this.store.select(selectLoading);
    this.currency = this.store.select(selectRate);
  }
}
