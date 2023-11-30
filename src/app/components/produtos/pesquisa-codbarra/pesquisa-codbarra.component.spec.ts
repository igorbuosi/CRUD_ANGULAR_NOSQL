import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCodbarraComponent } from './pesquisa-codbarra.component';

describe('PesquisaCodbarraComponent', () => {
  let component: PesquisaCodbarraComponent;
  let fixture: ComponentFixture<PesquisaCodbarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaCodbarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaCodbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
