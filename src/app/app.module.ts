import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BackgroundHeaderComponent } from './components/homepage/background-header/background-header.component';
import { BackgroundFooterComponent } from './components/homepage/background-footer/background-footer.component';
import { SoftServicesComponent } from './components/homepage/soft-services/soft-services.component';
import { DemoComponent } from './components/homepage/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BackgroundHeaderComponent,
    BackgroundFooterComponent,
    SoftServicesComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
