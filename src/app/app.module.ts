import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { MultiHeaderComponent } from './multi-header/multi-header.component';

@NgModule({
    declarations: [
        AppComponent,
        MultiHeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgGridModule.withComponents([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})


export class AppModule { }
