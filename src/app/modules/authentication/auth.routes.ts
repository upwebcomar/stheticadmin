import { Routes } from '@angular/router';
import { MainComponent as LoginMainComponent } from './components/main/main.component';

export const authRoutes: Routes = [
    // Rutas de Login
    {   path:"auth",
        children:[
            {path:"login", component:LoginMainComponent}
        ]
    }
];