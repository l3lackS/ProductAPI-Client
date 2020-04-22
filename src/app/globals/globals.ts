import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
	// Site name.
	siteName: string = "ProductAPI";

	// Base URL.
	BASE_URL: string = 'http://localhost:3000';
}