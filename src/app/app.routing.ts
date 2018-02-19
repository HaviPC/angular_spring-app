
import { RouterModule, Routes } from '@angular/router';
import {LoginsComponent} from './logins.component';
import{ DashboardComponent} from './dashboard.component';

const routes: Routes = [
  { path: '', component: LoginsComponent },
  { path: 'dashboard', component: DashboardComponent },
   { path: 'logins', component: LoginsComponent },
  
];
export const AppRoutingModule = RouterModule.forRoot(routes);