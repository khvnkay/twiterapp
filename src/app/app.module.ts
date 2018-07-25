import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule  } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { HeaderComponent } from './header/header.component'
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component'
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';

const appRoute: Routes=[
  {
    path: "",
    component: AppComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "home",
    component: TodoComponent
  },
  {
    path: "event",
    component: EventComponent
  },
  {
    path: "config",
    component: ConfigComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    AboutComponent,
    EventComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
