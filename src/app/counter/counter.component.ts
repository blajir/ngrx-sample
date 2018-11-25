import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(
    private store: Store<CounterReducer.State>,
    private fb: FormBuilder,
  ) {
    this.count$ = store.select(getCount);
  }

  counterForm: FormGroup = this.fb.group({
    val: new FormControl(0, [Validators.required]),
  });

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new CounterActions.CountIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterActions.CountDecrement());
  }

  reset() {
    this.store.dispatch(new CounterActions.CounterReset());
  }

}
