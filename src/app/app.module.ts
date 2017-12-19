import { ChuzDrPage } from './../pages/chuz-dr/chuz-dr';
import { OtpServiceProvider } from './../providers/otp-service/otp-service';
import { TokenServiceProvider } from './../providers/token-service/token-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatbotPage } from '../pages/chatbot/chatbot';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataserviceProvider } from '../providers/dataservice/dataservice';
import { ChatbotProvider } from '../providers/chatbot/chatbot';
import { LoginPage } from './../pages/login/login';
import { OtpPage } from './../pages/otp/otp';
import { NewsdetailPage } from './../pages/newsdetail/newsdetail';
import { MedicalRecordPage } from './../pages/medical-record/medical-record';
import { NewemrpopoverPage } from './../pages/newemrpopover/newemrpopover';
import { RecorduploadPage } from './../pages/recordupload/recordupload';
import { SettingsPage } from '../pages/settings/settings';
import { HowItWorksPage } from '../pages/how-it-works/how-it-works';
import { TermsOfUsePage } from '../pages/terms-of-use/terms-of-use';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { HomeProvider } from '../providers/home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { SettingServiceProvider } from '../providers/setting-service/setting-service';
import { MedicalRecordServiceProvider } from '../providers/medical-record-service/medical-record-service';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatbotPage,
    LoginPage,
    OtpPage,
    NewsdetailPage,
    SettingsPage,
    HowItWorksPage,
    TermsOfUsePage,
    ContactUsPage,
    MedicalRecordPage,
    NewemrpopoverPage,
    RecorduploadPage,
    ChuzDrPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ChatbotPage,
    LoginPage,
    OtpPage,
    NewsdetailPage,
    SettingsPage,
    HowItWorksPage,
    TermsOfUsePage,
    ContactUsPage,
    MedicalRecordPage,
    NewemrpopoverPage,
    RecorduploadPage,
    ChuzDrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataserviceProvider,
    ChatbotProvider,
    OtpServiceProvider,
    HTTP,
    TokenServiceProvider,
    LoginServiceProvider,
    HomeProvider,
    Camera,
    File,
    FileChooser,
    FilePath,
    FileTransfer,
    FileTransferObject,
    SettingServiceProvider,
    SettingServiceProvider,
    MedicalRecordServiceProvider

  ]
})
export class AppModule { }
