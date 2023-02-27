import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AthletesComponent } from './components/athletes/athletes.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscoverModalComponent } from './components/athletes/discover-modal/discover-modal.component';
import { PlayModalComponent } from './components/athletes/play-modal/play-modal.component';
import { ContractModalComponent } from './components/athletes/contract-modal/contract-modal.component';

const bootstrapModules = [
  NgbModalModule
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AthletesComponent,
    DiscoverModalComponent,
    PlayModalComponent,
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
