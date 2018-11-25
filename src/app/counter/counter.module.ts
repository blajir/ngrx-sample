import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', fromCounter.reducers, { metaReducers: fromCounter.metaReducers }),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
