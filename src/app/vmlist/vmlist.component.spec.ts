import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmlistComponent } from './vmlist.component';

describe('VmlistComponent', () => {
  let component: VmlistComponent;
  let fixture: ComponentFixture<VmlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
