import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nselect
  public name: string = 'Carlos';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Martha';
    this.gender = 'female';
  }

  // i18NPural

  public clients: string[] = ['Carlos', 'Jesus', 'Eduardo', 'Daniela']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue

  public person = {
    name: 'Carlos',
    age: 27,
    address: 'Madrid, Spain'
  }

  // Async pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa')
    }, 3500);
  })

}
