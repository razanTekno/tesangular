import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivityComponent } from './components/side-menu/activity/activity.component';
import { ChannelsComponent } from './components/side-menu/channels/channels.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SideMenuParentComponent } from './components/side-menu/side-menu-parent/side-menu-parent.component';
import { SwitchWindowDirective } from './directives/switch-window/switch-window.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivityComponent,
    ChannelsComponent,
    FooterComponent,
    HomeComponent,
    SideMenuParentComponent,
    SwitchWindowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
