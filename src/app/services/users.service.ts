import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      username: 'jdoe',
      rut: '12.123.123-1',
      passport: '123456',
      journeys: [
        'Los Alpes',
        'Barcelona',
        'Tokyo'
      ]
    },
    {
      id: '2',
      name: 'Alejandro Fernández',
      username: 'afernandez',
      rut: '21.321.321-3',
      passport: '654321',
      journeys: [
        'La Gran Muralla China',
        'Hong Kong',
        'Sidney',
        'Singapore',
        'Budapest',
        'Roma'
      ]
    },
    {
      id: '3',
      name: 'Lucas Rodríguez',
      username: 'lrodriguez',
      rut: '21.234.567-8',
      passport: '789456',
      journeys: [
        'Miami',
        'Los Ángeles',
        'Ibiza',
        'París'
      ]
    },
    {
      id: '4',
      name: 'Isabella Santos',
      username: 'isantos',
      rut: '20.987.654-3',
      passport: '456123',
      journeys: [
        'París',
        'Nápoles',
        'Madrid'
      ]
    },
    {
      id: '5',
      name: 'Sofia Patel',
      username: 'spatel',
      rut: '19.734.682-5',
      passport: '741852',
      journeys: [
        'Venecia',
        'Londres'
      ]
    },
    {
      id: '6',
      name: 'Gian Soto',
      username: 'gsoto',
      rut: '99.999.999-9',
      passport: '999999',
      journeys: [
        'Santiago'
      ]
    }
  ]

  constructor() { }

  getUsers(): User[] {
    return [...this.users]
  }

  getUser(id: string): User {
    return {
      ...this.users.find(user => {
        return user.id === id
      })
    } as User
  }
}
