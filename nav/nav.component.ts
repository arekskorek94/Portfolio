import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hamburgerToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  hamburgerToggleEvent(){
    this.hamburgerToggle = !this.hamburgerToggle;
  }

}
