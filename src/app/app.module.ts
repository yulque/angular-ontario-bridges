import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BridgeInfoComponent } from './bridge-info/bridge-info.component';
import { BridgeInfoPanelComponent } from './bridge-info-panel/bridge-info-panel.component';
import { BridgeInfoMapComponent } from './bridge-info-map/bridge-info-map.component';
import { BridgeFormTemplateDrivenComponent } from './bridge-form-template-driven/bridge-form-template-driven.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BridgeInfoComponent,
    BridgeInfoPanelComponent,
    BridgeInfoMapComponent,
    BridgeFormTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
