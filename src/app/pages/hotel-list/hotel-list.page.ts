import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { transpoter } from '../../../app/Environment';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.page.html',
  styleUrls: ['./hotel-list.page.scss'],
})
export class HotelListPage implements OnInit {


  getRooms: any;
  ref =  firebase.database().ref('rooms/');


  constructor() {
    this.ref.on('value', resp => {
      this.getRooms = transpoter(resp)
    })
   }

  ngOnInit() {
  }

}
