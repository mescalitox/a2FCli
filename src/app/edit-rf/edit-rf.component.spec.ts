/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRfComponent } from './edit-rf.component';

describe('EditRfComponent', () => {
  let component: EditRfComponent;
  let fixture: ComponentFixture<EditRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
