import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRepoComponent } from './trending-repo.component';

describe('TrendingRepoComponent', () => {
  let component: TrendingRepoComponent;
  let fixture: ComponentFixture<TrendingRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
