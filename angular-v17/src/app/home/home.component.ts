import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  // card = document.getElementsByTagName('mat-card');

  ngOnInit() {
    // document.addEventListener("mousemove", (e) => {
    //   this.rotateElement(e, this.card);
    // })
  }

  // rotateElement(event: any, ele: any) {
  //   const x = event.clientX;
  //   const y = event.clientY;
  //   // console.log(x, y, ele);
  //   const middleX = window.innerWidth / 2;
  //   const middleY = window.innerHeight / 2;

  //   const offsetX = ((x - middleX) / middleX) * 45;
  //   const offsetY = ((y - middleY) / middleY) * 45;
  //   // console.log(offsetX, offsetY);

  //   ele[0].style.setProperty("--rotateX", -1 * offsetY + "deg");
  //   ele[0].style.setProperty("--rotateY", offsetX + "deg");
  // }
}
