import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrutturaPageComponent } from './struttura-page.component';

describe('StrutturaPageComponent', () => {
  let component: StrutturaPageComponent;
  let fixture: ComponentFixture<StrutturaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrutturaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrutturaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
