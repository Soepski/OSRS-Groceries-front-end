import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsrsSkillComponent } from './osrs-skill.component';

describe('OsrsSkillComponent', () => {
  let component: OsrsSkillComponent;
  let fixture: ComponentFixture<OsrsSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsrsSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsrsSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
