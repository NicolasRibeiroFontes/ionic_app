import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  titulo: string;
  texto: string;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.titulo = this.navParams.get('titulo');
    this.texto = this.navParams.get('texto');
  }

  backPage(){
    this.nav.setRoot(HomePage);
  }

}
