import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListUIComponent } from './to-do-list-ui/to-do-list-ui.component';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoComponent } from './repo/repo.component';




@NgModule({
  declarations: [
    AppComponent,
    ToDoListUIComponent,
    ToDoListFormComponent,
    SearchComponent,
    RepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
