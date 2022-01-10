import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgategoryComponent } from './postgategory.component';

describe('PostgategoryComponent', () => {
  let component: PostgategoryComponent;
  let fixture: ComponentFixture<PostgategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
