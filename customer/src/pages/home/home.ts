import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TYPELIST_ITEM } from '../../typeModel/home/home';

import {UNPACK} from '../unpack/unpack'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  typeList:TYPELIST_ITEM[];
  constructor(public navCtrl: NavController) {
    this.typeList=[
      {
        type:'UNPACK',
        value:'SHD-0099'
      },
      {
        type:'QC',
        value:'SHD-0049'
      },
      {
        type:'REPAIR',
        value:'SHD-0039'
      },
      {
        type:'PRODUCT',
        value:'SHD-0029'
      },
      {
        type:'DELIVER',
        value:'SHD-0029'
      }
    ]
  }
  itemSelected(item){
    
    // console.log(item);
    switch (item.type) {
      case 'UNPACK':
      this.navCtrl.push(UNPACK);
        break;
    
      default:
        break;
    }
  }
  
}
