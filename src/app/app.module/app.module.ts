import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app';
import { AppRoutingModule } from '../app-routing.module/app-routing.module';
import { UserLitsComponent } from '../user-lits.component/user-lits.component';
import { AboutComponent } from '../about.component/about.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent,       
    UserLitsComponent,
    AboutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}