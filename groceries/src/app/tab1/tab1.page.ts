import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {





  
constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
}

itemName = ""

items = [
 "Milk",

  "Bread",

  "Eggs",

  "Chickens **NO ROOSTERS**"

]

itemCount = 4

public removeItem(index:number){
  let id =this.items[index]
  let newArray = this.items.filter((e, i) => i !== index);
  this.items = newArray

  this.itemCount -= 1
}

addItem() {
  if (this.itemName.length > 0) {
    let item = this.itemName;
    this.items.push(item);
    this.itemName = "";

  }
}

async updateItem(index:number) {
  let alert = await this.alertCtrl.create({
    header: 'Update Item?',
    message: 'Type in your new item to update.',
    inputs: [{ name: 'editItem', placeholder: 'Item' }],
    buttons: [{ text: 'Cancel', role: 'cancel' },
              { text: 'Update', handler: data => {  
                this.items[index] = data.editItem; }}]
  });
await alert.present();
}


//addItem(): void{
  //console.log("Adding Item");
  //this.itemCount += 1
  //this.items.push(this.itemName)
  
//}

public addButtons = ['OK'];
  public addInputs = [
    {
      placeholder: 'Grocery Item',
    },



  ];

  public deleteButtons = ['OK'];


  public deleteInputs = [
    {
      placeholder: 'Grocery Item',
    },

  ];

}










