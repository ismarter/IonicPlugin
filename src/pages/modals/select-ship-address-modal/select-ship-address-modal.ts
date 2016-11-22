import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SelectShipAddressModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-ship-address-modal',
  templateUrl: 'select-ship-address-modal.html'
})
export class SelectShipAddressModal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectShipAddressModal Page');
  }

}
