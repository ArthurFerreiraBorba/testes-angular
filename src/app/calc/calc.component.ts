import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  
  num1: number = 0
  num2: number = 0
  result: number = 0

  somarValores() {
    this.result = this.num1 + this.num2;
  }

  subtrairValores() {
    this.result = this.num1 - this.num2;
  }

  dividirValores() {
    if (!this.num1 || !this.num2) {
      throw new Error('[ERRO]: divisão por 0')
    }

    this.result = this.num1 / this.num2;
  }

  multiplicarValores() {
    this.result = this.num1 * this.num2;
  }
}
