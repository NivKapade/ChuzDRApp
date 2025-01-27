import { Component } from '@angular/core';
import { Injector, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, Slides } from 'ionic-angular';
import { NewsdetailPage } from '../newsdetail/newsdetail';
import { HomeProvider } from '../../providers/home/home';
import { TokenServiceProvider } from '../../providers/token-service/token-service'
import { ModalController,LoadingController, NavParams } from 'ionic-angular';

//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   public Community;
   loading:any;
   newslist:any = [];
  newstypelist2: any = ["All"];
  public newstypelist;
   newstype: any = 'All';
   tokenRes: any;
   @ViewChild(Slides) slides: Slides;
    public showLeftButton: boolean;
    public showRightButton: boolean;
  constructor(public navCtrl: NavController, private homeService: HomeProvider, private tokenService: TokenServiceProvider,public loadingCtrl: LoadingController ) {
   this.Community ="Lions club International";
   this.newstypelist=["All"];
   this.showLeftButton = false;
   this.showRightButton = this.newstypelist.length > 3;
  }
  ionViewDidLoad() {
    // debugger;
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
    this.newstype = "All";
    console.log("HomePage");
    this.tokenService.getToken().then(data => {
      this.tokenRes = data;
      if (this.tokenRes.status == "success") {
        console.log(this.tokenRes);
        this.getNews()
        
      } else {

      }
    });


  }
  public getNewsDetail(news){
      console.log("News detail");
	  console.log(news);
   this.navCtrl.push(NewsdetailPage,{param1:news});
}
   public filterData(newstype): void {
 this.newstype = newstype;
   console.log(newstype);
   console.log(this.newstype);
    }
	    public slideChanged(): void {
        let currentIndex = this.slides.getActiveIndex();
        this.showLeftButton = currentIndex !== 0;
        this.showRightButton = currentIndex !== this.slides.length()-3;
    }

    // Method that shows the next slide
    public slideNext(): void {
        this.slides.slideNext();
    }

    // Method that shows the previous slide
    public slidePrev(): void {
        this.slides.slidePrev();
    }
    getNews()
    {
      let i:any;
        debugger
        this.tokenService.getToken().then(data => {
          this.tokenRes = data;
          if (this.tokenRes.status == "success") {
            this.homeService.getPost(this.tokenRes.responseObject).then(response => {
              debugger;
              console.log(response);
              this.newslist = response;
              
              for(i=0;i<this.newslist.length;i++)
                {
                  if(!this.newstypelist.includes(this.newslist[i].postType))
                    this.newstypelist.push(this.newslist[i].postType);
                }
                console.log(this.newstypelist);
                this.loading.dismiss();
            });
          } else {
    
          }
        });

    }
}
