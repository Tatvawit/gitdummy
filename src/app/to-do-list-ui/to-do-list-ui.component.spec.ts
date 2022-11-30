import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListUIComponent } from './to-do-list-ui.component';

describe('ToDoListUIComponent', () => {
  let component: ToDoListUIComponent;
  let fixture: ComponentFixture<ToDoListUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
