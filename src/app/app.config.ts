import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MissingTranslationHandler, MissingTranslationHandlerParams, provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { APP_LANGUAGES } from './constants/languages.constant';
import { TextsService } from './services/texts.service';
import { of } from 'rxjs';

// Custom missing translation handler
class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return `[MISSING]: ${params.key}`;
  }
}

// Custom translation loader
class CustomTranslateLoader implements TranslateLoader {
	constructor(private readonly textsService: TextsService) {}
  getTranslation(lang: string) {
    return of(this.textsService.getTranslation(lang));
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideTranslateService({
			defaultLanguage: APP_LANGUAGES[0].code,
			useDefaultLang: true,
			missingTranslationHandler: {
				provide: MissingTranslationHandler,
				useClass: CustomMissingTranslationHandler,
				multi: false
			},
			loader: {
				provide: TranslateLoader,
				useFactory: (textsService: TextsService) => new CustomTranslateLoader(textsService),
				deps: [TextsService],
				multi: false
			}
		}),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.my-app-dark'
				}
			}
		})
	]
};
