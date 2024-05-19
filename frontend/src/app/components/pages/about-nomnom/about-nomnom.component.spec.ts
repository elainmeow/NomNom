import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNomnomComponent } from './about-nomnom.component';

describe('AboutNomnomComponent', () => {
  let component: AboutNomnomComponent;
  let fixture: ComponentFixture<AboutNomnomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutNomnomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutNomnomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
