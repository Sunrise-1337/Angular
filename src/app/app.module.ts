import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'search', component : SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
