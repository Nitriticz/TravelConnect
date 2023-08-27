import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'publications',
    children: [
      {
        path: '',
        loadChildren: () => import('./publications/publications.module').then( m => m.PublicationsPageModule)
      },
      {
        path: ':publicationId',
        loadChildren: () => import('./publications/comments/comments.module').then( m => m.CommentsPageModule)
      },
    ]
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: ':userId',
        loadChildren: () => import('./users/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
