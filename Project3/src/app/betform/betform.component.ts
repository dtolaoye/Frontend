import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-betform',
  templateUrl: './betform.component.html',
  styleUrls: ['./betform.component.scss']
})
export class BetformComponent implements OnInit {

  constructor() { }

  getFormData(){
    let title = $("#bettitle").val();
    let wager = $("#wager").val();
    let options = $("#options").val();
    let optionsArr = options.split(','); 
    alert(optionsArr);
  }

  ngOnInit(): void {

   

  }

}
