import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDropdownComponent } from './tabs-dropdown.component';

describe('TabsDropdownComponent', () => {
  let component: TabsDropdownComponent;
  let fixture: ComponentFixture<TabsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
