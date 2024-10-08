import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedaloaiClientScriptComponent } from './dedaloai-client-script.component';

describe('DedaloaiClientScriptComponent', () => {
  let component: DedaloaiClientScriptComponent;
  let fixture: ComponentFixture<DedaloaiClientScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedaloaiClientScriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DedaloaiClientScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
