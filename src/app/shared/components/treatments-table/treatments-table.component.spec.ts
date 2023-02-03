import { ChangeDetectionStrategy } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MOCK_TREATMENT_DATA } from 'src/mocks';

import { TreatmentsTableComponent } from './treatments-table.component';
import { TreatmentsTableModule } from './treatments-table.module';

describe('TreatmentsTableComponent', () => {
  let component: TreatmentsTableComponent;
  let fixture: ComponentFixture<TreatmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreatmentsTableModule],
    })
      .overrideComponent(TreatmentsTableComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TreatmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display no data incase api returns empty array', fakeAsync(() => {
    component.treatmentData = [];
    fixture.detectChanges();
    const inputEl =
      fixture.debugElement.nativeElement.querySelector('nz-empty');
    expect(inputEl).toBeTruthy();
  }));

  it('should display the data in the table', fakeAsync(() => {
    component.treatmentData = MOCK_TREATMENT_DATA;
    fixture.detectChanges();
    const row = fixture.debugElement.nativeElement.querySelectorAll('tr')[1];
    expect(row.innerHTML).toContain(MOCK_TREATMENT_DATA[0].treatmentCode);
  }));
});
