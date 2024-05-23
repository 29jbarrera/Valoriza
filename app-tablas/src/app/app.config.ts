import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
// import { ApiModule, Configuration } from './typescript-angular-client-generated';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      FormlyModule.forRoot({
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
        types: [
          // { name: 'object', component: ObjectTypeComponent },
        ],
      }),
      HttpClientModule,
      // ApiModule.forRoot(() => new Configuration({basePath: 'http://localhost:5000'}))
    ]),
    provideRouter(routes),
  ],
};
