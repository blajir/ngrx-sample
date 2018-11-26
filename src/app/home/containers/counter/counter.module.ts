import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', fromCounter.reducers, { metaReducers: fromCounter.metaReducers }),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
