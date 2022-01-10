import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCreationComponent } from './series-creation.component';

describe('SeriesCreationComponent', () => {
  let component: SeriesCreationComponent;
  let fixture: ComponentFixture<SeriesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
