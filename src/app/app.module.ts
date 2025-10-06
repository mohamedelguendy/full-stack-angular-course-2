import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { App } from './app';
import { BindingExamplesComponent } from './binding-examples.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    AppComponent,   // ✅ root wrapper
    App,            // ✅ feature component
    BindingExamplesComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // ✅ only ONE root
})
export class AppModule { }
