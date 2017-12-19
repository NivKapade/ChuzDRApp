import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { Injector, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ChatbotPage } from '../chatbot/chatbot';
import { MedicalRecordPage } from '../medical-record/medical-record';
//import { Geolocation } from '@ionic-native/geolocation';
//import { OffersPage } from '../offers/offers';

@Component({
  selector: 'page-chuz-dr',
  templateUrl: 'chuz-dr.html'
})

export class ChuzDrPage {
	public offertype;
	public offertypelist;
    public showLeftButton: boolean;
    public showRightButton: boolean;
	
	@ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {

   this.offertypelist=["assets/imgs/empty_photo.png",'assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'];
   this.showLeftButton = false;
   this.showRightButton = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosedoctorPage');
  }
  public filterData(offertype): void {
	   this.offertype = offertype;
        console.log(this.offertype);
    }
	    public slideChanged(): void {
        let currentIndex = this.slides.getActiveIndex();
        this.showLeftButton = currentIndex !== 0;
        this.showRightButton = currentIndex !== this.slides.length()-1;
    }

    // Method that shows the next slide
    public slideNext(): void {
        this.slides.slideNext();
    }

    // Method that shows the previous slide
    public slidePrev(): void {
        this.slides.slidePrev();
    }
	
	public NeedSurgery()
	{
		this.navCtrl.push(ChatbotPage);
		console.log("NeedSurgery invoked");
	}
	public NeedTests()
	{
		this.navCtrl.push(ChatbotPage);
		console.log("NeedTests invoked");
	}
	public NeedMedicalRecords()
	{
		this.navCtrl.push(MedicalRecordPage);
		console.log("NeedMedicalRecords invoked");
	}
	public NeedOffers()
	{
		//this.navCtrl.push(OffersPage);
		console.log("Need Offers invoked");
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Location',
      message: "Hello,Please set your location so we can assist you properly.",
      inputs: [
        {
          name: 'cityName',
          placeholder: 'Enter your City here.'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked',data.cityName);
            localStorage.setItem("city_name",data.cityName);
            this.navCtrl.push(ChatbotPage,{"CITY":data.cityName});
         //   this.getLatLong();
            console.log('Saved clicked',localStorage.getItem("city_name"));
          }
        }
      ]
    });
    prompt.present();
  }
  //  getLatLong(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //     console.log("LAT :",resp.coords.latitude);
  //     console.log("LOG :",resp.coords.longitude);
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });
  //    let watch = this.geolocation.watchPosition();
  //    watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //     console.log("Data LAT :",data.coords.latitude);
  //     console.log("Data LOG :",data.coords.longitude);
  //    });
  //  }

}
