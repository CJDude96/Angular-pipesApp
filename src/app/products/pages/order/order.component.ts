import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Green Lattern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'DareDevil',
      canFly: false,
      color: Color.red
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase
  }

}
