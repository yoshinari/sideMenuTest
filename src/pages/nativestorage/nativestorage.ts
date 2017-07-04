import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the NativestoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-nativestorage',
  templateUrl: 'nativestorage.html',
})
export class NativestoragePage {
  counter:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    this.getNativeStorage('counter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativestoragePage');

  }
  countUp(item: string){
    this.countUpNativeStorage(item);
  }
  countReset(item: string){
    this.resetNativeStorage(item);
  }
  countUpNativeStorage(item: string) {
    this.nativeStorage.getItem(item)
      .then(
      (get) => {
        get++;
        this.counter=get;
        this.nativeStorage.setItem(item, get)
          .then(
          () => {
          },
          error => console.error('Error set item!!')
          );
      }
      ,
      error => {
        if (error.code.code == 2) {  // ITEM_NOT_FOUND
          this.nativeStorage.setItem(item, 1)
            .then(
            () => {
              this.counter=1;
            },
            error => console.error('Error set item!!')
            );
        } else {
          console.error('Error get item!!');
          console.log(error);
        }
      });
  }
  getNativeStorage(item: string){
    this.nativeStorage.getItem(item)
      .then(
      (get) => {
        this.counter=get;
      },
      error => {
        this.counter=0;
      });
  }
  resetNativeStorage(item: string){
    this.nativeStorage.setItem(item,0)
      .then(
      () => {
        this.counter=0;
      },
      error => {
        this.counter=0;
      });
  }
}
