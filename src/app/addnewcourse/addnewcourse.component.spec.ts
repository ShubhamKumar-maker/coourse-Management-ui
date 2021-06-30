import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcourseComponent } from './addnewcourse.component';

describe('AddnewcourseComponent', () => {
  let component: AddnewcourseComponent;
  let fixture: ComponentFixture<AddnewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
