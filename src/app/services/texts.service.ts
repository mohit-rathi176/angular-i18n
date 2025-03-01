import { Injectable } from '@angular/core';

const TRANSLATIONS_EN = {
	WelcomeMessage: "Welcome to our application",
	Logout: "Logout",
	Profile: "Profile",
	Settings: "Settings",
	Dashboard: "Dashboard",
	Notifications: "Notifications",
	Search: "Search",
	Help: "Help",
	Save: "Save",
	Cancel: "Cancel",
	Delete: "Delete",
	Edit: "Edit",
	Submit: "Submit",
	Yes: "Yes",
	No: "No",
	Fallback: "No tranlsation found, fallback to English."
};

const TRANSLATIONS_ES = {
	WelcomeMessage: "Bienvenido a nuestra aplicación",
	Logout: "Cerrar sesión",
	Profile: "Perfil",
	Settings: "Configuraciones",
	Dashboard: "Tablero",
	Notifications: "Notificaciones",
	Search: "Buscar",
	Help: "Ayuda",
	Save: "Guardar",
	Cancel: "Cancelar",
	Delete: "Eliminar",
	Edit: "Editar",
	Submit: "Enviar",
	Yes: "Sí",
	No: "No"
};

const TRANSLATIONS_CA = {
	WelcomeMessage: "Benvingut a la nostra aplicació",
	Logout: "Tancar sessió",
	Profile: "Perfil",
	Settings: "Configuració",
	Dashboard: "Tauler de control",
	Notifications: "Notificacions",
	Search: "Cercar",
	Help: "Ajuda",
	Save: "Desa",
	Cancel: "Cancel·lar",
	Delete: "Eliminar",
	Edit: "Editar",
	Submit: "Envia",
	Yes: "Sí",
	No: "No"
};

@Injectable({
  providedIn: 'root'
})
export class TextsService {
  getTranslation(languageCode: string) {
		switch (languageCode) {
			case 'en':
				return TRANSLATIONS_EN;
			case 'es':
				return TRANSLATIONS_ES;
			case 'ca':
				return TRANSLATIONS_CA;
			default:
				return TRANSLATIONS_EN;
		}
	}
}
