import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRecapComponent } from './components/exo-recap/exo-recap.component';
import { PipeModule } from './pipe/pipe.module';
import { DemoRecapComponent } from './components/demo-recap/demo-recap.component';
import { NavComponent } from './components/nav/nav.component';
import { LinksComponent } from './components/nav/links/links.component';
import { ConsumerComponent } from './components/consumer/consumer.component'
import { ApiConsumerService } from './service/apiConsumer.service'

@NgModule({
  declarations: [	
    AppComponent, 
    ExoRecapComponent, 
    DemoRecapComponent, 
    NavComponent,
    LinksComponent,
    ConsumerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
