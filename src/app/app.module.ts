import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox';


import { MainNavComponent } from './loginPage/main-nav.component';
import { ContainerComponent } from './loginPage/container/container.component';
import { InputFieldComponent } from './loginPage/container/input-field/input-field.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { GridComponent } from './components/grid/grid/grid.component';
import { SignUpFormComponent } from './components/signUpForm/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ContainerComponent,
    InputFieldComponent,
    SignUpPageComponent,
    GridComponent,
    SignUpFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
