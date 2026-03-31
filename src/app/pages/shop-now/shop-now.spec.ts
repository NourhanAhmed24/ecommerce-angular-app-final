import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNow } from './shop-now';

describe('ShopNow', () => {
  let component: ShopNow;
  let fixture: ComponentFixture<ShopNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopNow],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopNow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
