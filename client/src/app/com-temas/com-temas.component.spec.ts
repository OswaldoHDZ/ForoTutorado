/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComTemasComponent } from './com-temas.component';

describe('ComTemasComponent', () => {
  let component: ComTemasComponent;
  let fixture: ComponentFixture<ComTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
