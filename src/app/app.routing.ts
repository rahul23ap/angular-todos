import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.comonents';
import {AboutComponent} from './components/about.component';
import {RegistrationComponent} from './components/registration.component';
//import {PracticeComponent} from './components/practice.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);