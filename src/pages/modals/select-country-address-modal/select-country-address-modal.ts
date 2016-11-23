import {Component} from '@angular/core';
import {NavController, ViewController, Platform} from 'ionic-angular';
import {SelectAddressService} from "../../../providers/select-address-service/select-address-service";

/*
 Generated class for the SelectCountryAddressModal page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-select-country-address-modal',
    templateUrl: 'select-country-address-modal.html'
})
export class SelectCountryAddressModal {

    searchQuery: string = null;

    dataLists: Array<any> = [];

    selectData: any;

    _matchFn: Function;

    _approxItemHeight: string = '53px';

    _approxHeaderHeight: string = '42px';

    constructor(public navCtrl: NavController, public viewController: ViewController, public selectAddressService: SelectAddressService, public platform: Platform) {
        this.selectData = this.viewController.getNavParams().get('data') || null;
        this.searchQuery = this.viewController.getNavParams().get('searchQuery') || this.selectAddressService.planeSearchQuery || null;
        this._matchFn = this.viewController.getNavParams().get('matchFn') || this._defaultMatchFn;
        this._approxItemHeight = this.platform.is('ios') ? '53px' : '53px';
        this._approxHeaderHeight = this.platform.is('ios') ? '42px' : '42px';
    }

    ionViewDidLoad() {

    }

    ionViewWillEnter() {

    }

    ionViewDidEnter() {
        this.initializeItems(this.selectAddressService.planeSearchQuery);
    }

    initializeItems(value: string = null): Promise<any> {

        return this.selectAddressService
            .getOriginalChinaDataList()
            .then((data) => {

                this.dataLists = Object.assign([], data);

                this.selectAddressService.planeSearchQuery = value;

                if (value && value.trim() != '') {
                    this.dataLists = this.dataLists.filter((item) => {
                        return item['cJP'] == value ||
                            (item['seo'] || '').indexOf(value) > -1 ||
                            (item['cname'] || '').indexOf(value) > -1;
                    });
                }
                return this.dataLists;
            })
            .catch(() => {

            });
    }

    onInput($event) {
        this.initializeItems($event.target.value);
    }

    onClear($event) {
        this.initializeItems()
    }

    onCancel($event) {
        this.initializeItems()
    }

    onFocus($event) {

    }

    onBlur($event) {

    }

    onSelect($event, data) {
        this.viewController.dismiss(data);
    }

    trackByFn(index: number, item: any) {
        return item['cityId'];
    }

    headerFn(record, recordIndex, records) {
        if (recordIndex == 0) {
            return records[0]['cfrl'];
        }

        if (records[recordIndex]['cfrl'] != records[recordIndex - 1]['cfrl']) {
            return records[recordIndex]['cfrl'];
        }

        return null;
    }

    private _defaultMatchFn(data, item): boolean {
        if (data && item) {
            return data.trim().indexOf(item['cfrl'].trim()) > -1;
        }
        return false;
    }

}
