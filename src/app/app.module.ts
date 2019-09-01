import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule} from '@angular/common/http';

//Services
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DetallesComponent,
    HomeComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, DataService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
