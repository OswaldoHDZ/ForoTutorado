/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompTemasAgregadosComponent } from './comp-temasAgregados.component';

describe('CompTemasAgregadosComponent', () => {
  let component: CompTemasAgregadosComponent;
  let fixture: ComponentFixture<CompTemasAgregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTemasAgregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTemasAgregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
