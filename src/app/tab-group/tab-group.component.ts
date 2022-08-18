import { Component, OnInit, EventEmitter, Input, Output, ContentChildren, QueryList } from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  tabPanelList : TabPanelComponent[] = [];
  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  @ContentChildren(TabPanelComponent)
  tabPanelLists!: QueryList<TabPanelComponent>;
  constructor() {}

  ngOnInit() {}

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }
  ngAfterContentInit() {
    this.tabPanelLists.changes.subscribe(() => {
      if (this.tabPanelList.length <= this.tabActiveIndex) {
        this.selectItem(0);
      }
    });
  }
  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }
  removeTabPanel(tab: TabPanelComponent) {
    let index = -1;
    const tabPanelList: TabPanelComponent[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }

}
