import {createReducer, on, Action} from '@ngrx/store'

import { RateState } from "../types/appState";
import {
  getRateAction,
  getRateFailureAction,
  getRateSuccessAction, setConvertibleCurrencyAction,
  setConvertibleCurrencyCountAction, setCurrencyToBeConvertedAction, setCurrencyToBeConvertedCountAction
} from "./actions/getRate.actions";

const initialState: RateState = {
  convertibleCurrency: "UAN",
  countFirst: null,
  countSecond: null,
  currencyToBeConverted: "USD",
  isLoading: false,
  rate: null
}

const editArticleReducer = createReducer(
  initialState,
  on(
    getRateAction,
    (state): RateState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getRateSuccessAction,
    (state, action): RateState => ({
      ...state,
      isLoading: false,
      rate: action.rate
    })
  ),
  on(
    getRateFailureAction,
    (state): RateState => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    setConvertibleCurrencyCountAction,
    (state, action): RateState => ({
      ...state,
      countFirst: action.countFirst,
      countSecond:
        (action.countFirst / state.rate.find((value) => value.cc === state.currencyToBeConverted).rate)
          * state.rate.find((value) => value.cc === state.convertibleCurrency).rate
    })
  ),
  on(
    setConvertibleCurrencyAction,
    (state, action): RateState => ({
      ...state,
      convertibleCurrency: action.convertibleCurrency,
      countSecond:
        (state.countFirst / state.rate.find((value) => value.cc === state.currencyToBeConverted).rate)
          * state.rate.find((value) => value.cc === action.convertibleCurrency).rate
    })
  ),
  on(
    setCurrencyToBeConvertedCountAction,
    (state, action): RateState => ({
      ...state,
      countSecond: action.countSecond,
      countFirst:
        (action.countSecond / state.rate.find((value) => value.cc === state.convertibleCurrency).rate)
        * state.rate.find((value) => value.cc === state.currencyToBeConverted).rate
    })
  ),
  on(
    setCurrencyToBeConvertedAction,
    (state, action): RateState => ({
      ...state,
      currencyToBeConverted: action.currencyToBeConverted,
      countSecond:
        (state.countFirst / state.rate.find((value) => value.cc === action.currencyToBeConverted).rate)
        * state.rate.find((value) => value.cc === state.convertibleCurrency).rate
    })
  ),
)

export function reducers(state: RateState, action: Action) {
  return editArticleReducer(state, action)
}
