import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatbotProvider } from '../../providers/chatbot/chatbot';
import { ChatBot } from '../../model/chatbot.model';
import { Content } from 'ionic-angular';
/**
 * Generated class for the ChatbotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chatbot',
  templateUrl: 'chatbot.html',
  queries: {
    content: new ViewChild('content')
  },
  providers:[ChatbotProvider]
})
export class ChatbotPage {
  conversion:Array<ChatBot>=[];
  clkmsg:Array<ChatBot>=[];
  messages2: any=[];
  messages:any=[];
  tokenRes:any;
  sendMsg:any="";
  city_name:string;
  hide:boolean=false;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams,private chatbotService:ChatbotProvider) {
    this.city_name=navParams.get("CITY");
    this.hide=false;
    console.log("CITY", this.city_name);
  }

  ionViewDidLoad() {
    // debugger;
    this.hide=false;
    this.chatbotService.getToken().then(data => {
      this.tokenRes = data;
     if(this.tokenRes.status=="success"){
       this.getMsg(0,this.messages);    
     }else{
        
     }
    });
   

  }
      getMsg(id:number,msg:any){
        debugger;
      
        let smsg=msg.commonText;
        console.log("GET IID :",smsg);
        //  if(ID !=undefine)
      //  this.conversion.push(msg.commonText);
          this.sendMsg=smsg;
         
         if(msg.length!=0){
          this.hide=true;
          this.clkmsg.push(smsg);
          if(this.clkmsg<this.clkmsg){
            this.hide=true;
          }
          console.log("SEND :",this.clkmsg);
        }else{ 
          this.hide=false;
        }
       
          this.chatbotService.getToken().then(data => {
            this.tokenRes = data;
           if(this.tokenRes.status=="success"){
                this.chatbotService.getMessages(id).then(response=>{
                  debugger;
                 this.messages2=response;
                 this.hide=false;
                 this.conversion.push(this.messages2);
               
              
                });
           }else{
      
           }
          });

  }
  ionViewDidEnter(){
    thi