import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
/**
 * Generated class for the RecorduploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova:any;
@IonicPage()
@Component({
  selector: 'page-recordupload',
  templateUrl: 'recordupload.html',
})

export class RecorduploadPage {
   public lastImage;
   public loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: FileTransfer, private file: File, private filePath: FilePath,public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private fileChooser: FileChooser) {
	  this.lastImage = navParams.get('param1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecorduploadPage');
  }
  private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

public uploadImage() {
  // Destination URL
  var url = "http://yoururl/upload.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  const fileTransfer: FileTransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });
}

}
