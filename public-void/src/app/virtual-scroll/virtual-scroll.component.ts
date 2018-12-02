import { Component, OnInit, Input, TemplateRef, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  @Input() items: any[] = [];
  @Input() itemSize: any;


  private parentElement: HTMLElement;

  public parentWidth: string;
  public parentHeight: string;

  determineParentSize(): void {
    this.parentWidth = this.parentElement.offsetWidth + 'px';
    this.parentHeight = this.parentElement.offsetHeight + 'px';
  }
  determineParentHeight(): string {
    return this.parentElement.offsetHeight + 'px';
  }

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.parentElement = this.elRef.nativeElement.parentElement;
    this.parentElement.addEventListener('resize', () => {
      this.determineParentSize();
    });
    this.determineParentSize();
  }

}
