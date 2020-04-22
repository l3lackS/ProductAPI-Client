import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  /**
   * Variables.
   */
  today: number = Date.now();
  siteName: string = environment.siteName;

  /**
   * Icons.
   */
  faCode = faCode;

  /**
   * Constructor.
   */
  constructor() { }

  ngOnInit() {
  }

}
