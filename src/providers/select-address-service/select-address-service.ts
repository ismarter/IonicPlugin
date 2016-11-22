import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {STATIC_RESOURCES, STATIC_RESOURCE_ENDPOINT} from "../../configs/resource.config";

@Injectable()
export class SelectAddressService {

    planeSearchQuery: string = null;

    private _originalPlaneDataList: any = null;

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


}
