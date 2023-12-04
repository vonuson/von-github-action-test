import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePackageComponent } from './sample-package.component';

describe('SamplePackageComponent', () => {
  let component: SamplePackageComponent;
  let fixture: ComponentFixture<SamplePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePackageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SamplePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
