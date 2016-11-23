import {Component} from '@angular/core';
import {NavController, ViewController, Platform} from 'ionic-angular';
import {SelectAddressService} from "../../../providers/select-address-service/select-address-service";

@Component({
    selector: 'page-select-train-address-modal',
    templateUrl: 'select-train-address-modal.html'
})
export class SelectTrainAddressModal {

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
            .getOriginalTrainDataList()
            .then((data) => {

                this.dataLists = Object.assign([], data);

                this.selectAddressService.planeSearchQuery = value;

                if (value && value.trim() != '') {
                    this.dataLists = this.dataLists.filter((item) => {
                        return item['0'] == value ||
                            (item['1'] || '').indexOf(value) > -1 ||
                            (item['2'] || '').indexOf(value) > -1 ||
                            (item['3'] || '').indexOf(value) > -1 ||
                            (item['4'] || '').indexOf(value) > -1 ||
                            item['5'] == value ||
                            item['6'] == value ||
                            (item['7'] || '').indexOf(value) > -1;
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
        this.viewController.dismiss({
            cityId: data[0],
            cityName: data[1],
            cityNameEN: data[2],
            cityNameJP: data[3],
            firstLetter: data[4],
            ctripCityId: data[5],
            hotFlag: data[6],
            parentCityName: data[7]
        });
    }

    trackByFn(index: number, item: any) {
        return item[7] + '-' + item[1];
    }

    headerFn(record, recordIndex, records) {
        if (recordIndex == 0) {
            return records[0][4];
        }

        if (records[recordIndex][4] != records[recordIndex - 1][4]) {
            return records[recordIndex][4];
        }

        return null;
    }

    private _defaultMatchFn(data, item): boolean {
        if (data && item) {
            return data.trim().indexOf(item[1].trim()) > -1;
        }
        return false;
    }


}
