import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'product-api',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
	constructor(translate: TranslateService) {
		// Translate.
		translate.addLangs(["ES", "EN"]);
        translate.setDefaultLang('EN');

        // Translate to use.
        const browserLang = translate.getBrowserLang().toUpperCase();
    	translate.use(browserLang.match(/ES|EN/) ? browserLang : 'EN');
    }

}
