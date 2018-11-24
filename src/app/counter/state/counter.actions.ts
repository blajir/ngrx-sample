import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  CountIncrement = '[Counter] Increment Count',
  CountDecrement = '[Counter] Decrement Count',
  CounterReset = '[Counter Component] Reset',
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

export type CounterActions =
  CountIncrement |
  CountDecrement |
  CounterReset;
