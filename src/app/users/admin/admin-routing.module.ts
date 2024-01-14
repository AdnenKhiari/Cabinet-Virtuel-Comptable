import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HistoriqueActionsComponent } from './historique-actions/historique-actions.component'
import { GestionUserComponent } from './gestion-user/gestion-user.component'
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component'
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'tableau-de-bord', pathMatch: 'full' },
      { path: 'tableau-de-bord', component: TableauDeBordComponent },
      { path: 'Historique', component: HistoriqueActionsComponent },
      { path: 'gestion-user', component: GestionUserComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
