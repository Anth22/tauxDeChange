import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertisseurMonetaireComponent } from './convertisseur-monetaire.component';

describe('ConvertisseurMonetaireComponent', () => {
  let component: ConvertisseurMonetaireComponent;
  let fixture: ComponentFixture<ConvertisseurMonetaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertisseurMonetaireComponent]
    });
    fixture = TestBed.createComponent(ConvertisseurMonetaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
