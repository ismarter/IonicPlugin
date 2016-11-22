import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';


//安全－页面
const SECURITY_PAGE = [LoginPage, RegisterPage, ForgetPasswordPage, ForgetPasswordForSetPasswordPage, RegisterForSetPasswordPage];
//首页－页面
const HOME_PAGES = [HomePage, FillBillForTravelPage, FillBillForCommunicationPage, FillBillForHotelPage, FillBillForOtherPage, FillBillForPaymentPage, FillBillForPurchasePage, FillBillForReceivablesPage, FillBillForRestaurantPage, FillBillForSalePage];
//报帐－页面
const BILL_PAGES = [BillPage, BillViewFilterPopover];
//我的－页面
const MINE_PAGES = [MinePage, PersonalSettingPage, PersonInfoPage, MyBillsPage, ConsumptioAnalysisPage, OptionIntroducePage, BeginnerHelpPage, LabelManagerPage, ComplaintSuggestPage];
//模态框
const MODAL_PAGES = [SelectBusAddressModal, SelectCountryAddressModal, SelectPlaneAddressModal, SelectShipAddressModal, SelectTrainAddressModal];
//页面
const PAGES = [TabsPage, ...HOME_PAGES, ...BILL_PAGES, ...MINE_PAGES, ...SECURITY_PAGE, ...MODAL_PAGES];
//管道
const PIPES = [];
//组件
const COMPONENTS = [DropownComponent];
//指令
const DIRECTIVES = [];
//服务
const PROVIDERS = [Storage, HttpResourceService, UserService, LabelManagerService, CacheManagerervice, FormValidateService, SelectAddressService];
//模块
const MODULES = [FormValidateModule];

@NgModule({
    declarations: [
        MyApp,

    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,

    ],
    providers: []
})
export class AppModule {
}
