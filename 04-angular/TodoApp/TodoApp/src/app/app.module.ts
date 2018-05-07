import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';
import {StorageService} from "./services/storage/storage.service";
import { TaskfilterrvPipe } from './pipe/taskfilterrv.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    TaskfilterrvPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
