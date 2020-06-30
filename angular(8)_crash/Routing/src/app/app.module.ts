import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/kunal', component: UsersComponent },
  { path: 'servers', component: ServersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
