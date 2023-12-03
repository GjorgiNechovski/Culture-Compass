import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapsModule } from 'src/libs/maps/maps.module';
import { RouterModule } from '@angular/router';
import { RoutingModule } from 'src/libs/routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/libs/maps/components/auth/login.component';
import { RegisterComponent } from 'src/libs/maps/components/auth/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    NgbModule,
    MapsModule,
    RoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
