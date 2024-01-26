import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstrationPanelComponent } from './adminstration-panel.component';

describe('AdminstrationPanelComponent', () => {
  let component: AdminstrationPanelComponent;
  let fixture: ComponentFixture<AdminstrationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminstrationPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminstrationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
