import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'tic-tac-toe', component: TicTacToeComponent},
];
