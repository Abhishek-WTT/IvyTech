import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {DynamicLoading} from './dynamic_loading';
import { Tabs } from './tab.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { BaseComponent } from './base/base.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { PasswordComponent } from './password/password.component';
import { MatInputModule } from '@angular/material/input';
import { LoginHtmlComponent } from './login-html/login-html.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DynamicLoading,
    Tabs,
    FormPanelComponent,
    BaseComponent,
    TextFieldComponent,
    ButtonComponent,
    ImageComponent,
    PasswordComponent,
    LoginHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
    

  ],
  providers: [HttpClientModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ReactiveFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
