import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      FormlyModule.forRoot({
          validationMessages: [{ name: 'required', message: 'This field is required' }],
          types: [
            // { name: 'object', component: ObjectTypeComponent },
          ],
        }),
  ]),
    provideRouter(routes),
  ],
};
