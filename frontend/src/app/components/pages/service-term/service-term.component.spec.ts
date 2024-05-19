import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTermComponent } from './service-term.component';

describe('ServiceTermComponent', () => {
  let component: ServiceTermComponent;
  let fixture: ComponentFixture<ServiceTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceTermComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
