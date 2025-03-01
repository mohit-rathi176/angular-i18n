export type SupportedLanguages = 'en' | 'es' | 'ca';

export interface ILanguage {
	code: SupportedLanguages;
	label: string;
	culture: string;
}