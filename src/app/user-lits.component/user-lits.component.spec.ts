import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLitsComponent } from './user-lits.component';

describe('UserLitsComponent', () => {
  let component: UserLitsComponent;
  let fixture: ComponentFixture<UserLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
