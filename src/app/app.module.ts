import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    AddRestaurantComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    TabGroupComponent,
    TabPanelComponent,
    BsTabGroupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
