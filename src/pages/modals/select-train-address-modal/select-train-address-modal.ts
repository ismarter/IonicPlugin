import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SelectTrainAddressModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-train-address-modal',
  templateUrl: 'select-train-address-modal.html'
})
export class SelectTrainAddressModal {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SelectTrainAddressModal Page');
  }

}
