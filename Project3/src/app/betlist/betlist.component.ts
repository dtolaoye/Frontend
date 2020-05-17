import { Component, OnInit } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';


type Bet = { //probably move this into another file at some point
  bets: number;
  name: string;
  user: string;
  cutoff: number;
  description: string;
}

const betlistData: Bet[] = [ //placeholder data delete later and replace w api call 
  {"bets": 1643, "name": "Promotion to assistant manager", "user":"futuremanager", "cutoff": 9324122543, "description": "eoihdfkghsldijgrldkfjblgserg"},
  {"bets": 2032, "name": "Baby Abigail's Eye Color", "user":"newdad110", "cutoff": 1589059414267, "description": "eoihdfkghsldijgrldkfjblgserg"},
  {"bets": 22, "name": "Some random shit idk", "user": "blahblahblah", "cutoff": 1587059474267, "description": "eoihdfkghsldijgrldkfjblgserg"}
]

@Component({
  selector: 'app-betlist',
  templateUrl: './betlist.component.html',
  styleUrls: ['./betlist.component.scss']
})

export class BetlistComponent implements OnInit {
  betlist: Bet[] = betlistData;
  pipe = new DatePipe('en-US');
  activeTab = "top";
  public isCollapsed = false;
  constructor() {
  }

  dateFormat(myDate: string): string{
    const formattedDate = formatDate(myDate, "medium", "en-US");
    return formattedDate;
  }

  ngOnInit(): void {
    this.betlist = betlistData;
    this.sortBets(this.activeTab);
  }

  sortBets(tab: string):  void{
    // reorder elements 
    this.betlist = betlistData; //update betlists 
    switch (tab) {
      case 'top':
        this.betlist.sort(function(a: Bet, b: Bet): number {return b.bets - a.bets;}); 
        break;
      case 'new':
        this.betlist.sort(function(a: Bet, b: Bet): number {return b.cutoff - a.cutoff;});
        break;
      case 'you':
        this.betlist = this.betlist.filter(function(a: Bet): boolean {return a.user === "blahblahblah"}); //replace with current user
        break;
      default:
        console.log("what did you do");
    }
  }

  tabNav(tab: string): void { 
    document.getElementById(this.activeTab.concat('-nav')).classList.remove("active");
    this.activeTab = tab;
    document.getElementById(tab.concat('-nav')).classList.add('active');
    this.sortBets(this.activeTab);
  }

}
