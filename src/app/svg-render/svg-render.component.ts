import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-svg-render',
  templateUrl: './svg-render.component.html',
  styleUrls: ['./svg-render.component.css']
})
export class SvgRenderComponent implements AfterViewInit {
  @ViewChild('main') svgMain: ElementRef;

  childrenItems = [];
  displayedColumns = ['position', 'childrenCount', 'name', 'html'];
  dataSource;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.childrenItems = [];
    this.populateChildrenItems(this.svgMain.nativeElement);
    this.populateDataSourceForTable();
    this.changeDetectorRef.detectChanges();
  }

  /**
   * When you want to magically change the color of a element inside the SVG
   * @param el
   */
  onRowSelect(el: any) {
    el.item.style = `fill: ${this.getRandomColor()}`;
  }

  /**
   * Update data for Table
   */
  populateDataSourceForTable() {
    this.dataSource = [];

    for (let i = 0; i < this.childrenItems.length; i++) {
      this.dataSource.push({
        position: i + 1,
        item: this.childrenItems[i],
      });
    }
  }

  /**
   * This is where we extract all children from a element
   * @param item
   */
  populateChildrenItems(item) {
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        this.childrenItems.push(child);
        this.populateChildrenItems(child);
      }
    }
  }

  /**
   * Just a quick way to generate random color
   */
  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
