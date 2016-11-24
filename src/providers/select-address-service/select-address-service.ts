import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {STATIC_RESOURCES, STATIC_RESOURCE_ENDPOINT} from "../../configs/resource.config";

@Injectable()
export class SelectAddressService {

    planeSearchQuery: string = null;

    private _originalPlaneDataList: any = null;

    trainSearchQuery: string = null;

    private _originalTrainDataList: any = null;

    chinaSearchQuery: string = null;

    private _originalChinaDataList: any = null;

    constructor(public http: Http) {

    }

    getOriginalPlaneDataList(): Promise<any> {
        if (this._originalPlaneDataList) {
            return Promise.resolve(this._originalPlaneDataList);
        } else {
            return this.http.get(STATIC_RESOURCE_ENDPOINT + STATIC_RESOURCES.ADDRESS.PLANE_ADDRESS)
                .map(res => {
                    this._originalPlaneDataList = res.json();
                    this._originalPlaneDataList.inlandCity.sort(function (a, b) {
                        if (a.initial.toUpperCase() > b.initial.toUpperCase()) {
                            return 1;
                        }
                        if (a.initial.toUpperCase() == b.initial.toUpperCase()) {
                            return 0;
                        }
                        if (a.initial.toUpperCase() < b.initial.toUpperCase()) {
                            return -1;
                        }
                    });
                    return this._originalPlaneDataList;
                }).toPromise();
        }
    }

    getOriginalTrainDataList(): Promise<any> {
        if (this._originalTrainDataList) {
            return Promise.resolve(this._originalTrainDataList);
        } else {
            return this.http.get(STATIC_RESOURCE_ENDPOINT + STATIC_RESOURCES.ADDRESS.TRAIN_ADDRESS)
                .map(res => {
                    this._originalTrainDataList = res.json();
                    this._originalTrainDataList.sort(function (a, b) {
                        if (a[4].toUpperCase() > b[4].toUpperCase()) {
                            return 1;
                        }
                        if (a[4].toUpperCase() == b[4].toUpperCase()) {
                            return 0;
                        }
                        if (a[4].toUpperCase() < b[4].toUpperCase()) {
                            return -1;
                        }
                    });
                    return this._originalTrainDataList;
                }).toPromise();
        }
    }

    getOriginalChinaDataList(): Promise<any> {
        if (this._originalChinaDataList) {
            return Promise.resolve(this._originalChinaDataList);
        } else {
            return this.http.get(STATIC_RESOURCE_ENDPOINT + STATIC_RESOURCES.ADDRESS.CHINA_ADDRESS)
                .map(res => {
                    this._originalChinaDataList = res.json();
                    this._originalChinaDataList.sort(function (a, b) {
                        if (a['cfrl'].toUpperCase() > b['cfrl'].toUpperCase()) {
                            return 1;
                        }
                        if (a['cfrl'].toUpperCase() == b['cfrl'].toUpperCase()) {
                            return 0;
                        }
                        if (a['cfrl'].toUpperCase() < b['cfrl'].toUpperCase()) {
                            return -1;
                        }
                    });
                    return this._originalChinaDataList;
                }).toPromise();
        }
    }


}
