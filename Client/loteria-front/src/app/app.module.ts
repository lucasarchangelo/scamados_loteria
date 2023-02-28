import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ContractModalComponent } from './components/lotteries/contract-modal/contract-modal.component';
import { LotteriesComponent } from './components/lotteries/lotteries.component';

const bootstrapModules = [
  NgbModalModule
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LotteriesComponent,
    ContractModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...bootstrapModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
