import { Action } from '@ngrx/store';
import { CounterActions, CounterActionTypes } from './counter.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {
    case CounterActionTypes.CountIncrement:
      return Object.assign({}, { ...state, counter : state.counter + 1 });

    case CounterActionTypes.CountDecrement:
      return Object.assign({}, { ...state, counter : state.counter - 1 });

    case CounterActionTypes.CounterReset:
      return {counter: 0};

    case CounterActionTypes.CounterSet:
      return {
        counter: action.payload
      };

    default:
      return state;
  }
}

export const getCount = (state: State) => state.counter;
