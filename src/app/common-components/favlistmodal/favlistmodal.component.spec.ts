import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavlistmodalComponent } from './favlistmodal.component';

describe('FavlistmodalComponent', () => {
  let component: FavlistmodalComponent;
  let fixture: ComponentFixture<FavlistmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavlistmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavlistmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
