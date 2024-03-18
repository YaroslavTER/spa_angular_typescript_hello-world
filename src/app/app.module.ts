import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';
import { AuthModule } from '@auth0/auth0-angular';
import { SharedModule } from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule.forRoot({
      ...env.auth0,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
