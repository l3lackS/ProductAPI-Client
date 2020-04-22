import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals/globals';
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

  /**
   * Icons.
   */
  faCode = faCode;

  /**
   * Constructor.
   */
  constructor(public global: Globals) { }

  ngOnInit() {
  }

}
