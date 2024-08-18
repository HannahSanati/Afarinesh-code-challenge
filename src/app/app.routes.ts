import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './users/components/user-list/user-list.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path:'users',
            component : UserListComponent,
        }
    ]
}];
