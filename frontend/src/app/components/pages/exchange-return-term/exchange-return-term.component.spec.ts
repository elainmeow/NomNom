import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeReturnTermComponent } from './exchange-return-term.component';

describe('ExchangeReturnTermComponent', () => {
  let component: ExchangeReturnTermComponent;
  let fixture: ComponentFixture<ExchangeReturnTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeReturnTermComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExchangeReturnTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
