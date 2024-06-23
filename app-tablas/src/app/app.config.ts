import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { FormlyModule } from '@ngx-formly/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalGuard, MsalInterceptor, MsalService } from '@azure/msal-angular';
import { MSALGuardConfigFactory, MSALInstanceFactory, MSALInterceptorConfigFactory } from './ms';
import { ApiModule, Configuration } from './typescript-angular-client-generated';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      FormlyModule.forRoot({
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
        types: [
          // { name: 'object', component: ObjectTypeComponent },
        ],
      }),
      HttpClientModule,
      ApiModule.forRoot(() => new Configuration({basePath: 'http://localhost:5000'}))
    ]),
    // Microsoft
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: MsalInterceptor,
        multi: true,
      },
      {
        provide: MSAL_INSTANCE,
        useFactory: MSALInstanceFactory,
      },
      {
        provide: MSAL_GUARD_CONFIG,
        useFactory: MSALGuardConfigFactory,
      },
      {
        provide: MSAL_INTERCEPTOR_CONFIG,
        useFactory: MSALInterceptorConfigFactory,
      },
      MsalService,
      MsalGuard,
      MsalBroadcastService,
    provideRouter(routes),
  ],
};
