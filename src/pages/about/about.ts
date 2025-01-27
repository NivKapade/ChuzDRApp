import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injector, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ChatbotPage } from '../chatbot/chatbot';
import { MedicalRecordPage } from '../medical-record/medical-record';
//import { OffersPage } from '../offers/offers';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	public offertype;
	public offertypelist;
    public showLeftButton: boolean;
    public showRightButton: boolean;
	
	@ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.offertypelist=["assets/imgs/logo.png",'assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'];
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

}
