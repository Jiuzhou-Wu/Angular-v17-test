import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product-store', component: ProductListComponent},
    {path: 'tic-tac-toe', component: TicTacToeComponent},
];
