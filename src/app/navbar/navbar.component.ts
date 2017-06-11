import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;

  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

}
