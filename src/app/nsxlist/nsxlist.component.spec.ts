import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsxlistComponent } from './nsxlist.component';

describe('NsxlistComponent', () => {
  let component: NsxlistComponent;
  let fixture: ComponentFixture<NsxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
