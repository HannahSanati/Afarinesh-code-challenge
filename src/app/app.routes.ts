import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { UserProfileComponent } from './users/components/user-profile/user-profile.component';

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path:'users',
            component : UserListComponent,
        },
        {
            path: "users/:id",
            component: UserProfileComponent,
          },
    ]
}];
