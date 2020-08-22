import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'movies',
        component: HomeComponent,
        pathMatch: 'full',
      },
      //   {
      //     path: 'details',
      //     component: DebtorDashboardsComponent,
      //     pathMatch: 'full'
      //   }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
