import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatallogedComponent } from './datalloged.component';

describe('DatallogedComponent', () => {
  let component: DatallogedComponent;
  let fixture: ComponentFixture<DatallogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatallogedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatallogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
