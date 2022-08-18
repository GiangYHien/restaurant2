import { Component, OnInit, Input, ViewChild, TemplateRef, ContentChild } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabPanelContentDirective } from '../tab-panel-content.directive';
@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  @Input() title: string = '';
  @ViewChild(TemplateRef, { static: true })
  implicitBody!: TemplateRef<unknown>;
  @ContentChild(TabPanelContentDirective, { static: true, read: TemplateRef})
  explicitBody: TemplateRef<unknown> | undefined;
  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
  }
 ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

}
