import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { RecorduploadPage } from '../recordupload/recordupload';
/**
 * Generated class for the NewemrpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova:any;

@IonicPage()
@Component({
  selector: 'page-newemrpopover',
  templateUrl: 'newemrpopover.html',
})
export class NewemrpopoverPage {

 public lastImage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: FileTransfer, private file: File, private filePath: FilePath,public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private fileChooser: FileChooser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewemrpopoverPage');
  }
  private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
    this.navCtrl.push(RecorduploadPage,{param1:this.lastImage});
  }, error => {
    this.presentToast('Error while storing file.');
  });
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
  public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

  camerahandler()
  {
	  console.log("take pic");
	  this.takePicture(this.camera.PictureSourceType.CAMERA);
  }
  galleryhandler()
  {
	  console.log("upload from gallery");
	  this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  }
  pdfhandler()
  {
	  console.log("upload pdf");
	this.fileChooser.open().then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android')) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
  }
  

}
