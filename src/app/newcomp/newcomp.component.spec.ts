import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompComponent } from './newcomp.component';

describe('NewcompComponent', () => {
  let component: NewcompComponent;
  let fixture: ComponentFixture<NewcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
