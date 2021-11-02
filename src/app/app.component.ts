import { Component, } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private firebase: FirebaseX) {

    this.initializeApp();

  }
  initializeApp() {
    this.platform.ready().then(() => {

      this.firebase.getToken()
        .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));

      this.firebase.onMessageReceived()
        .subscribe(data => console.log(`User opened a notification ${data}`));

      this.firebase.onTokenRefresh()
        .subscribe((token: string) => console.log(`Got a new token ${token}`));
    });
  }



}
