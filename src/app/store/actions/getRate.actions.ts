import {createAction, props} from '@ngrx/store'

import { ExchangeRateInterface } from "../../types/exchangeRate.interface";
import { ActionTypes } from "../../types/action-types";

export const getRateAction = createAction(
  ActionTypes.GET_RARE
)

export const getRateSuccessAction = createAction(
  ActionTypes.GET_RARE_SUCCESS,
  props<{rate: ExchangeRateInterface[]}>()
)

export const getRateFailureAction = createAction(
  ActionTypes.GET_RARE_FAILURE
)

export const setConvertibleCurrencyAction = createAction(
  ActionTypes.SET_CONVERTIBLECURRENCY,
  props<{convertibleCurrency: string}>()
)

export const setCurrencyToBeConvertedAction = createAction(
  ActionTypes.SET_CURRENCY_TO_BE_CONVERTED,
  props<{currencyToBeConverted: string}>()
)

export const setConvertibleCurrencyCountAction = createAction(
  ActionTypes.SET_FIRST_COUNT,
  props<{countFirst: number}>()
)

export const setCurrencyToBeConvertedCountAction = createAction(
  ActionTypes.SET_SECOND_COUNT,
  props<{countSecond: number}>()
)
