import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  CountIncrement = '[Counter] Increment Count',
  CountDecrement = '[Counter] Decrement Count',
  CounterReset = '[Counter Component] Reset',
  CounterSet = '[Counter Component] Set',
}

export class CountIncrement implements Action {
  readonly type = CounterActionTypes.CountIncrement;
  public constructor() {}
}

export class CountDecrement implements Action {
  readonly type = CounterActionTypes.CountDecrement;
  public constructor() {}
}

export class CounterReset implements Action {
  readonly type = CounterActionTypes.CounterReset;
  public constructor() {}
}

export class CounterSet implements Action {
  readonly type = CounterActionTypes.CounterSet;
  constructor(public payload: number) {}
}

export type CounterActions =
  | CountIncrement
  | CountDecrement
  | CounterReset
  | CounterSet;
