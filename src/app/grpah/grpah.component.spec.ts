import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpahComponent } from './grpah.component';

describe('GrpahComponent', () => {
  let component: GrpahComponent;
  let fixture: ComponentFixture<GrpahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
