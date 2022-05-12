import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, of, switchMap } from "rxjs";

import { ExchangeRateService } from "../../services/exchangeRate.service";
import { getRateAction, getRateFailureAction, getRateSuccessAction } from "../actions/getRate.actions";
import { ExchangeRateInterface } from "../../types/exchangeRate.interface";

@Injectable()
export class GetRateEffect {
  getRate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRateAction),
      switchMap(() => {
        return this.rateService.getRate().pipe(
          map((rate: ExchangeRateInterface[]) => {
            return getRateSuccessAction({ rate })
          }),

          catchError(() => {
            return of(getRateFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private rateService: ExchangeRateService) {}
}
