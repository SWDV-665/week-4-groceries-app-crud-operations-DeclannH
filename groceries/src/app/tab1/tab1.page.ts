import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {





  
constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
}

items = [
  {Number:1,
    name: "Milk"},

  {Number:2,
    name: "Bread"},

  {Number:3,
    name: "Eggs"},

  {Number:4,
    name: "Chickens **NO ROOSTERS**"}

]


public removeItem(index:number){
  let id =this.items[index]
  let newArray = this.items.filter((e, i) => i !== index);
  this.items = newArray
}


addItem(): void{
  console.log("Adding Item");

  
}

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










