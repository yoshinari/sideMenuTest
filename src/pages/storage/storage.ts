import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the StoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  counter:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getStorage('counter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

  countUp(item: string){
    this.countUpStorage(item);
  }
  countReset(item: string){
    this.resetStorage(item);
  }
  countUpStorage(item: string) {
    this.storage.get(item)
      .then(
      (get) => {
        get++;
        this.counter=get;
        this.storage.set(item, get)
          .then(
          () => {
          },
          error => console.error('Error set item!!')
          );
      }
      ,
      error => {
        if (error.code.code == 2) {  // ITEM_NOT_FOUND
          this.storage.set(item, 1)
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
  getStorage(item: string){
    this.storage.get(item)
      .then(
      (get) => {
        this.counter=get;
      },
      error => {
        this.counter=0;
      });
  }
  resetStorage(item: string){
    this.storage.set(item,0)
      .then(
      () => {
        this.counter=0;
      },
      error => {
        this.counter=0;
      });
  }
}
