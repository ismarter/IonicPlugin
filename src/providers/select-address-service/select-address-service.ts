import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {STATIC_RESOURCES, STATIC_RESOURCE_ENDPOINT} from "../../configs/resource.config";

@Injectable()
export class SelectAddressService {

    planeSearchQuery: string = null;
    private _planeDataList: any = null;
    private _originalPlaneDataList: any = null;

    constructor(public http: Http) {

    }

    getPlaneDataList(): Promise<any> {
        if (this._planeDataList) {
            return Promise.resolve(this._planeDataList);
        } else {
            return this.getOriginalPlaneDataList().then((data) => {
                this._planeDataList = this._formatPlaneDataList(data);
                console.log(this._planeDataList);
                return this._planeDataList;
            })
        }
    }

    getOriginalPlaneDataList(): Promise<any> {
        if (this._originalPlaneDataList) {
            return Promise.resolve(this._originalPlaneDataList);
        } else {
            return this.http.get(STATIC_RESOURCE_ENDPOINT + STATIC_RESOURCES.ADDRESS.PLANE_ADDRESS)
                .map(res => {
                    this._originalPlaneDataList = res.json();
                    console.log(this._originalPlaneDataList);
                    return this._originalPlaneDataList;
                }).toPromise();
        }
    }

    private _formatPlaneDataList(data: any): any {

        let planeDataList: any = {};

        for (let i = 65, n = 65 + 26; i < n; i++) {
            let key = '' + String.fromCharCode(i);
            planeDataList[key] = [];
        }

        if (data && data.inlandCity) {
            data.inlandCity.forEach((_item) => {
                planeDataList[_item.initial].push(_item);
            });
        }

        return planeDataList;
    }

}
