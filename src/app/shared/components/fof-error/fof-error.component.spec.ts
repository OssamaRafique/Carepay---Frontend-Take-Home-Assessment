import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { FofErrorComponent } from './fof-error.component';
import { FofErrorModule } from './fof-error.module';

describe('FofErrorComponent', () => {
  let component: FofErrorComponent;
  let fixture: ComponentFixture<FofErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FofErrorModule, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(FofErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
