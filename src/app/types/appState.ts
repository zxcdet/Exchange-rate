import { ExchangeRateInterface } from "./exchangeRate.interface";

export interface AppState {
  appState: RateState
}

export interface RateState {
  rate: ExchangeRateInterface[] | null
  isLoading: boolean
  convertibleCurrency: string
  currencyToBeConverted: string
  countFirst: number
  countSecond: number
}

