import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RequestPostsService } from '../service/request-posts.service';
import { SquaresPostEpic, squaresPostReducer } from '../store';
import { FeatureSquareComponent } from './feature-square/feature-square.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureSquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: squaresPostReducer }),
    EffectsModule.forRoot([SquaresPostEpic]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true
    })
  ],
  providers: [RequestPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
