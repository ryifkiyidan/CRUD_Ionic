import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item.model';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];

  constructor(
      private itemsServ: ItemsService,
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.items = this.itemsServ.getAllItems();
  }

  async presentAlert(id: string){
    const alert = await this.alertCtrl
        .create({
          header: 'Are you sure?',
          message: 'You will not be able to recover this item!',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel'
            },
            {
              text: 'Yes, delete it!',
              handler: () => {
                this.presentLoading().then(() => {
                  this.itemsServ.deleteItem(id);
                  this.items = this.itemsServ.getAllItems();
                  this.presentToast();
                });
              }
            }
          ]
        });
    await alert.present();
  }
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting item...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item deleted successfully',
      duration: 3000,
      color: 'success'
    });
    await toast.present();
  }
}
