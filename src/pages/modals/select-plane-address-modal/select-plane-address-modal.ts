import {Component} from '@angular/core';
import {NavController, ViewController, Platform} from 'ionic-angular';
import {SelectAddressService} from "../../../providers/select-address-service/select-address-service";

@Component({
    selector: 'page-select-plane-address-modal',
    templateUrl: 'select-plane-address-modal.html'
})
export class SelectPlaneAddressModal {

    searchQuery: string = null;

    dataLists: any = {};

    selectData: any;

    _matchFn: Function;

    _approxItemHeight: string = '53px';

    _approxHeaderHeight: string = '42px';

    _title: string = '选择地点';

    constructor(public navCtrl: NavController, public viewController: ViewController, public selectAddressService: SelectAddressService, public platform: Platform) {
        this.selectData = this.viewController.getNavParams().get('data') || null;
        this.searchQuery = this.viewController.getNavParams().get('searchQuery') || this.selectAddressService.planeSearchQuery || null;
        this._matchFn = this.viewController.getNavParams().get('matchFn') || this._defaultMatchFn;
        this._approxItemHeight = this.platform.is('ios') ? '53px' : '53px';
        this._approxHeaderHeight = this.platform.is('ios') ? '42px' : '42px';
        if (this.viewController.getNavParams().get('title')) {
            this._title = this.viewController.getNavParams().get('title');
        }
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
            .getOriginalPlaneDataList()
            .then((data) => {
                this.dataLists = Object.assign({}, data);
                this.selectAddressService.planeSearchQuery = value;
                if (value && value.trim() != '') {
                    this.dataLists.inlandCity = this.dataLists.inlandCity.filter((item) => {
                        return (item['name'] || '').indexOf(value) > -1 ||
                            item['arriveIndex'] == value ||
                            item['departIndex'] == value ||
                            (item['ename'] || '').indexOf(value) > -1 ||
                            (item['jp'] || '').indexOf(value) > -1 ||
                            (item['portCode'] || '').indexOf(value) > -1 ||
                            (item['portName'] || '').indexOf(value) > -1 ||
                            (item['py'] || '').indexOf(value) > -1;
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
        return item.name + '-' + item.portName;
    }

    headerFn(record, recordIndex, records) {
        if (recordIndex == 0) {
            return records[0].initial;
        }

        if (records[recordIndex].initial != records[recordIndex - 1].initial) {
            return records[recordIndex].initial;
        }

        return null;
    }

    private _defaultMatchFn(data, item): boolean {
        if (data && item) {
            return data.indexOf(item.name) > -1 && data.indexOf(item.portName) > -1;
        }
        return false;
    }

    reduceArray(list, number: number = 4) {
        let dataList = [];

        if (list) {
            let indexList = [];
            list.forEach((item, index) => {
                if (index % number == 0) {
                    dataList.push(indexList);
                    indexList = [];
                }
                indexList.push(item);
            });
            dataList.push(indexList);
        }
        return dataList;
    }

}
