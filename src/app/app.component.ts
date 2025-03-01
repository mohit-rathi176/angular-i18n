import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { SelectModule } from 'primeng/select';
import { TextsService } from './services/texts.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { APP_LANGUAGES } from './constants/languages.constant';

@Component({
  selector: 'app-root',
  imports: [
		MenubarModule,
		SelectModule,
		FormsModule,
		TranslateModule
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	translateService = inject(TranslateService);
	textsService = inject(TextsService);

	selectedLanguage = APP_LANGUAGES[0].code;
  languages = APP_LANGUAGES;

	constructor() {
		this.translateService.addLangs(['en', 'es', 'ca']);
	}

	onLanguageChange(): void {
		this.translateService.use(this.selectedLanguage);
	}
}
