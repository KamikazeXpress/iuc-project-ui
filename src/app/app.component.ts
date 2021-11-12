import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform, private firebase: FirebaseX) {

    this.initializeApp();

  }
  initializeApp() {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {

        this.firebase.getToken()
          .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
          .catch(error => console.error('Error getting token', error));

        this.firebase.onMessageReceived()
          .subscribe(data => 
            {
              console.log(`User opened a notification ${data}`)

              // route to notification tab
              this.router.navigate(['/tabs/tab2'])
            }
          );

        this.firebase.onTokenRefresh()
          .subscribe((token: string) => console.log(`Got a new token ${token}`));
      });
    }
  }


}
