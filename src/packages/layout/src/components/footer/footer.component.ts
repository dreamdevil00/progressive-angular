import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit {
  public footerLeft = 'footerLeft';
  public footerRight = 'footerRight';
  constructor() { }

  ngOnInit() { }
}
