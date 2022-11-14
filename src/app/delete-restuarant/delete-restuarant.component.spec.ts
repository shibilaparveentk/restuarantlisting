import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestuarantComponent } from './delete-restuarant.component';

describe('DeleteRestuarantComponent', () => {
  let component: DeleteRestuarantComponent;
  let fixture: ComponentFixture<DeleteRestuarantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestuarantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestuarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
