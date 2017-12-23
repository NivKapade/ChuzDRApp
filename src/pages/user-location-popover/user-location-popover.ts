import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatbotPage } from '../chatbot/chatbot';
import { Diagnostic } from '@ionic-native/diagnostic';
/**
 * Generated class for the UserLocationPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-location-popover',
  templateUrl: 'user-location-popover.html',
  providers:[Diagnostic]
})
export class UserLocationPopoverPage {
  locationInfo: any;
  currentLocation: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private nativeGeocoder: NativeGeocoder,
      private geolocation: Geolocation,
      private diagnostic: Diagnostic,
      private platform: Platform,) {
  this.currentLocation={locality:"Location not available"}}

  ionViewDidLoad() {
    let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
    let errorCallback = (e) => console.error(e);
    this.diagnostic.isGpsLocationEnabled().then(successCallback).catch(errorCallback);
    this.diagnostic. isLocationEnabled().then(successCallback).catch(errorCallback);
    this.diagnostic.isLocationAuthorized().then(successCallback).catch(errorCallback);
    this.diagnostic.getLocationAuthorizationStatus().then(successCallback).catch(errorCallback);
    this.diagnostic. requestLocationAuthorization(Diagnostic.locationAuthorizationMode.ALWAYS).then(successCallback).catch(errorCallback);
   
    this.platform.ready().then(() => {
      /* Perform initial geolocation */
      this.geolocation.getCurrentPosition().then((position) => {
          console.log("LAYT :",position.coords.latitude)
      }).catch((err) => {
          console.log('Error getting location', err.message);
      });
  });
}
    // this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
    //   console.log("Location Res :",resp);
    //   this.nativeGeocoder.reverseGeocode( resp.coords.latitude, resp.coords.longitude)
    //   .then((result: NativeGeocoderReverseResult) => 
    //   {
    //   this.currentLocation=(JSON.stringify(result));
    //   console.log(this.currentLocation);}
    // ).catch((error: any) => console.log(error));
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
    // alert(this.currentLocation.locality);
 // }

  setLocation(loc)
  {
    localStorage.setItem("city_name",loc);
    this.navCtrl.push(ChatbotPage,{"CITY":loc});
 //   this.getLatLong();
    console.log('Saved clicked',localStorage.getItem("city_name"));
  }

}
