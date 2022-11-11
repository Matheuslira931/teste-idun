import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './core/services/global.service';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { SiteModule } from './site/site.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDefaultComponent } from './shared/components/input/input-default/input-default.component';
@NgModule({
  declarations: [
    AppComponent,
    InputDefaultComponent
  ],
  imports: [
    SiteModule,
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutingModule)
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
