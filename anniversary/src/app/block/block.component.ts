import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  constructor() {}
  @Input() imageName: string = "./assets/img/comp1.jpg";
  @Input() title: string = "So Lovely"
  ngOnInit(): void {
    if (this.imageName) {
      this.imageName = "./assets/img/block"+this.imageName + ".jpg"
    }
  }
}
