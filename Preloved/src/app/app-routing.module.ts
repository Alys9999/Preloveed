import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home/profile',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'set-profile',
    loadChildren: () => import('./set-profile/set-profile.module').then( m => m.SetProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
