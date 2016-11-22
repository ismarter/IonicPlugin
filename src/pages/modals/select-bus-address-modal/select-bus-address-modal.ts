import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SelectBusAddressModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-bus-address-modal',
  templateUrl: 'select-bus-address-modal.html'
})
export class SelectBusAddressModal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectBusAddressModal Page');
  }

}
