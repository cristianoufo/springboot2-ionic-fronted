import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login(){
   // push empilha as paginas como em um app mobile
   // this.navCtrl.push('CategoriasPage');
   this.navCtrl.setRoot('CategoriasPage');
  }
}