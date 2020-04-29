import { Component, OnInit } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';

type Bet = { //probably move this into another file at some point
  bets: number;
  name: string;
  user: string;
  cutoff: string;
}
@Component({
  selector: 'app-betlist',
  templateUrl: './betlist.component.html',
  styleUrls: ['./betlist.component.scss']
})


export class BetlistComponent implements OnInit {
  betlist: Bet[] = [ //placeholder data delete later and replace w api callw
    {"bets": 2032, "name": "Baby Abigail's Eye Color", "user":"newdad110", "cutoff": this.dateFormat("1987-07-16T19:20+01:00")},
    {"bets": 1643, "name": "Promotion to assistant manager", "user":"futuremanager", "cutoff": this.dateFormat("1988-02-26T11:30+01:00")}
  ]
  pipe = new DatePipe('en-US');
  activeTab = "top-nav";

  constructor() {
    
  }

  dateFormat(myDate: string): string{
    const formattedDate = formatDate(myDate, "medium", "en-US");
    return formattedDate;
  }

  ngOnInit(): void {
  }

  tabNav(tab: string): void { 
    document.getElementById(this.activeTab).classList.remove("active");
    this.activeTab = tab.concat('-nav');
    document.getElementById(tab.concat('-nav')).classList.add('active'); //http://plnkr.co/edit/glSz1qytmdZ9BQfGbmVo?p=preview
  }

}
