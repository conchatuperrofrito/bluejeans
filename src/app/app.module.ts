import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompoenetOneComponent } from './share/componentsFile/compoenet-one/compoenet-one.component';
import { CompoenetTwoComponent } from './share/componentsFile/compoenet-two/compoenet-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CompoenetOneComponent, CompoenetTwoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
