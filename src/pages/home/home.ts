import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PushPage } from '../push/push';
import { RootPage } from '../root/root';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

  openPushPage(){
    this.nav.push(PushPage, {titulo: 'Push Page!', texto: 'Hello Push'});
  }

  openRootPage(){
    this.nav.setRoot(RootPage, {titulo: 'Root Page!', texto: 'Hello Root'});
  }

  openLoginPage(){
    this.nav.push(LoginPage);
  }
}
