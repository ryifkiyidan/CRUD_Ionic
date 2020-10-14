import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../items/items.service';
import {Item} from '../items/item.model';
import {AlertController, ToastController} from '@ionic/angular';

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
      private toastCtrl: ToastController,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.items = this.itemsServ.getAllItems();
  }

  deleteItem(id: string){
    this.itemsServ.deleteItem(id);
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
                this.deleteItem(id);
                this.presentToast();
              }
            }
          ]
        });
    await alert.present();
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
