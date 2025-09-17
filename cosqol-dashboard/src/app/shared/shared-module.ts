import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './components/card/card';
import { DataTable } from './components/data-table/data-table';
import { Modal } from './components/modal/modal';
import { Button } from './components/button/button';
import { Spinner } from './components/spinner/spinner';



@NgModule({
  declarations: [
    Card,
    DataTable,
    Modal,
    Button,
    Spinner
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
