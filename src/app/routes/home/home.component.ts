import { Component, OnInit, ViewChild, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

class coords {
  x: number;
  y: number;
};

@Component({
  selector: 'ph-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  mousePos: coords = new coords;
  svgPos: coords = new coords;

  @ViewChildren('letter') letters: ElementRef[];
  @ViewChild('svgElem') svgElem: ElementRef;

  constructor() { }

  ngOnInit() {
    let rect = this.svgElem.nativeElement.getBoundingClientRect();
    this.svgPos.x = rect.x;
    this.svgPos.y = rect.y;

  }

  ngAfterViewInit() {
    console.log(this.letters);
  }

  updateMousePosition($event) {
    this.mousePos.x = $event.clientX - this.svgPos.x;
    this.mousePos.y = $event.clientY - this.svgPos.y;

    console.log(this.mousePos);
  }

}
