import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetProfilePage } from './set-profile.page';

describe('SetProfilePage', () => {
  let component: SetProfilePage;
  let fixture: ComponentFixture<SetProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SetProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
