import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeproductcard',
  templateUrl: './homeproductcard.component.html',
  styleUrls: ['./homeproductcard.component.scss'],
})
export class HomeproductcardComponent  implements OnInit {
  @Input() imageURL: string = '';
  @Input() productName: string = '';
  @Input() distance: string = '';

  constructor() { }

  ngOnInit() {}

}
