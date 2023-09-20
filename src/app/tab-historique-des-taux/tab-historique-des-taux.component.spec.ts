import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHistoriqueDesTauxComponent } from './tab-historique-des-taux.component';

describe('TabHistoriqueDesTauxComponent', () => {
  let component: TabHistoriqueDesTauxComponent;
  let fixture: ComponentFixture<TabHistoriqueDesTauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabHistoriqueDesTauxComponent]
    });
    fixture = TestBed.createComponent(TabHistoriqueDesTauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
