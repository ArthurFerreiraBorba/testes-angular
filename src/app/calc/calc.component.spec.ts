import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois valores de forma correta', () => {
    component.num1 = 4;
    component.num2 = 6;
    component.somarValores();

    expect(component.result).toEqual(10);
  });

  it('deve subtrair dois valores de forma correta', () => {
    component.num1 = 4;
    component.num2 = 6;
    component.subtrairValores();

    expect(component.result).toEqual(-2);
  });

  it('deve multiplicar dois valores de forma correta', () => {
    component.num1 = 4;
    component.num2 = 6;
    component.multiplicarValores();

    expect(component.result).toEqual(24);
  });

  
  it('deve dividir dois valores de forma correta', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.dividirValores();

    expect(component.result).toEqual(2);
  });

  it('deve gerar um erro de divisão por 0', () => {
    component.num1 = 7;
    component.num2 = 0;

    expect(() => component.dividirValores()).toThrowError('[ERRO]: divisão por 0')
  });
});
