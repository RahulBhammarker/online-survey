import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { SurveyService } from '../survey/survey.service';


describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ProgressBarComponent],
      providers: [SurveyService] // Using the Servey Service Directly instead of stub as its not accessing any real API as of now
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate progress percentage', () => {
    component.ngOnInit();
    component.calculateProgress();
    expect(component.progressPercent).not.toBeNull();
  });
});
