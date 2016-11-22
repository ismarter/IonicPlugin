import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {SelectPlaneAddressModal} from "../modals/select-plane-address-modal/select-plane-address-modal";

/*
 Generated class for the SelectAddress page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-select-address',
    templateUrl: 'select-address.html'
})
export class SelectAddressPage {

    plane: string = null;

    train: string = null;

    ship: string = null;

    bus: string = null;

    country: string = null;

    constructor(public navCtrl: NavController, public modalController: ModalController) {
    }

    ionViewDidLoad() {
        console.log('Hello SelectAddressPage Page');
    }

    selectPlane($event) {
        let modal = this.modalController.create(SelectPlaneAddressModal, {data: this.plane});
        modal.onWillDismiss((data) => {
            console.log(data);
            // this.plane = data;
        })
        modal.present();
    }

}
