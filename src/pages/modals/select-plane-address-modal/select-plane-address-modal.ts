import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {SelectAddressService} from "../../../providers/select-address-service/select-address-service";

/*
 Generated class for the SelectPlaneAddressModal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-select-plane-address-modal',
    templateUrl: 'select-plane-address-modal.html'
})
export class SelectPlaneAddressModal {

    searchQuery: string = null;

    constructor(public navCtrl: NavController, public viewController: ViewController, public selectAddressService: SelectAddressService) {
        this.searchQuery = this.selectAddressService.planeSearchQuery || null;
    }

    ionViewDidLoad() {

    }

    ionViewDidEnter() {
        this.selectAddressService
            .getPlaneDataList()
            .then((data) => {
                console.log(data);
            })
    }

    onInput($event) {

    }

    onClear($event) {

    }

    onCancel($event) {

    }

    onFocus($event) {

    }

    onBlur($event) {

    }

}
