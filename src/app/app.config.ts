import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { authRoutes } from './modules/authentication/auth.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      HttpClientModule,
      RouterModule.forRoot(routes),
      RouterModule.forChild(authRoutes) //rutas del modulo Authentication
    ])
  ],
  
};
