import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'template-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  /**
   * Variables.
   */
  languages = [];
  siteName = environment.siteName;

  /**
   * Icons.
   */
  faGlobeAmericas = faGlobeAmericas;

  /**
   * Constructor.
   */
  constructor(public translate: TranslateService) { }

  /**
   * ~ Function to change lang.
   * @ Params: (lang) => lang for use.
   */
  changeLang(lang: string) {
    // Uppercase.
    lang = lang.toUpperCase();

    // Check langs.
    if (!this.languages.includes(lang)) {
      return;
    }

    // Execute.
    this.translate.use(lang);
  }

  ngOnInit() {
    // Set all langs.
    this.languages = this.translate.getLangs();
  }

}
