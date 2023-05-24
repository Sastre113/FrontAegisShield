import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogAnimationsExample, DialogAnimationsExampleDialog } from "./modal/dialog-animations-example";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ModalCustomDialog } from "./modal-custom/dialog/modal-custom-dialog";
import { ModalCustom } from "./modal-custom/modal/modal-custom";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DialogAnimationsExample,
        BrowserAnimationsModule,
        ModalCustomDialog,
        DialogAnimationsExampleDialog,
        ModalCustom
    ]
})
export class AppModule { }
