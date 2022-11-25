import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDirectionComponent } from './form-direction.component';

describe('FormDirectionComponent', () => {
  let component: FormDirectionComponent;
  let fixture: ComponentFixture<FormDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
