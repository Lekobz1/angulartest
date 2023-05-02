// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { HeaderComponent } from './header/header.component';
import { CenterWebsiteComponent } from './center-website/center-website.component';
import { RightPageComponent } from './right-page/right-page.component';
import { RightPageComposentComponent } from './right-page-composent/right-page-composent.component';
import { CenterWebsiteComposentComponent } from './center-website-composent/center-website-composent.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    LesAmisComponent,
    UnAmiComponent,
    HeaderComponent,
    CenterWebsiteComponent,
    RightPageComponent,
    RightPageComposentComponent,
    CenterWebsiteComposentComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
