import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {

  titulo: string;
  texto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = this.navParams.get('titulo');
    this.texto = this.navParams.get('texto');
  }

}
