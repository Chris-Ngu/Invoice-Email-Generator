import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemPanelComponent } from './item-panel/item-panel.component';
import { InvoicePlusButtonComponent } from './invoice-plus-button/invoice-plus-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPanelComponent,
    InvoicePlusButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
