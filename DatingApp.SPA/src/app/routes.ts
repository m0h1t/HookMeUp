import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AuthGuard } from './guard/auth.guard';
import { PreventUnsavedChanges } from './guard/prevent-unsaved-changes.guard';
import { MemberDetailResolver } from './resolvers/member-detail.resolver';
import { MemberListResolver } from './resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './resolvers/member-edit.resolver';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {
                path: 'member/edit',
                component: MemberEditComponent,
                canDeactivate: [PreventUnsavedChanges],
                resolve: {user: MemberEditResolver}
            },
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent}
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
