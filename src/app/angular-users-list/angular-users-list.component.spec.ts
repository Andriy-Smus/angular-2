import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUsersListComponent } from './angular-users-list.component';

describe('AngularUsersListComponent', () => {
  let component: AngularUsersListComponent;
  let fixture: ComponentFixture<AngularUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
