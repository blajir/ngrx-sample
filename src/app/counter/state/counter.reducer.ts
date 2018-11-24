import { Action } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case CounterActionTypes.CountIncrement:
      return Object.assign({}, { ...state, counter : state.counter + 1 });
    case CounterActionTypes.CountDecrement:
      return Object.assign({}, { ...state, counter : state.counter - 1 });
    case CounterActionTypes.CounterReset:
      return {counter: 0};
    default:
      return state;
  }
}

export const getCount = (state: State) => state.counter;
