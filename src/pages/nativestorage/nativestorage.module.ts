import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativestoragePage } from './nativestorage';

@NgModule({
  declarations: [
    NativestoragePage,
  ],
  imports: [
    IonicPageModule.forChild(NativestoragePage),
  ],
  exports: [
    NativestoragePage
  ]
})
export class NativestoragePageModule {}
