import { Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminstrationPanelComponent } from './Components/adminstration-panel/adminstration-panel.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'AP', component: AdminstrationPanelComponent },

];
