import { ServerResolver } from './servers/server/server-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ServersService } from './servers/servers.service';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';




const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
    //* canActivate: [AuthGuard] *//
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver}},
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ] },
    //{path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!' } },

    {path: '**', redirectTo: '/not-found'}
  ];
  

@NgModule({
    imports: [
       // RouterModule.forRoot(appRoutes, {useHash: true}),
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}