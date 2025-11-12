import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dasshboard } from './dasshboard';

describe('Dasshboard', () => {
  let component: Dasshboard;
  let fixture: ComponentFixture<Dasshboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dasshboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dasshboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
