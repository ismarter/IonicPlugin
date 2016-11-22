import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {SelectAddressPage} from "../pages/select-address/select-address";
import {SelectPlaneAddressModal} from "../pages/modals/select-plane-address-modal/select-plane-address-modal";
import {SelectTrainAddressModal} from "../pages/modals/select-train-address-modal/select-train-address-modal";
import {SelectBusAddressModal} from "../pages/modals/select-bus-address-modal/select-bus-address-modal";
import {SelectCountryAddressModal} from "../pages/modals/select-country-address-modal/select-country-address-modal";
import {SelectShipAddressModal} from "../pages/modals/select-ship-address-modal/select-ship-address-modal";
import {SelectAddressService} from "../providers/select-address-service/select-address-service";


//页面
const PAGES = [SelectAddressPage]
//模态
const MODALS = [SelectBusAddressModal, SelectCountryAddressModal, SelectPlaneAddressModal, SelectShipAddressModal, SelectTrainAddressModal]
//管道
const PIPES = [];
//组件
const COMPONENTS = [];
//指令
const DIRECTIVES = [];
//服务
const PROVIDERS = [SelectAddressService]
//模块
const MODULES = [];

@NgModule({
    declarations: [
        MyApp,
        ...PAGES,
        ...MODALS,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        ...MODULES
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ...PAGES,
        ...MODALS,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...PIPES
    ],
    providers: [...PROVIDERS]
})
export class AppModule {
}
