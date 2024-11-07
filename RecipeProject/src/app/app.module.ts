import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipesModule } from './recipes/recipes.module';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
