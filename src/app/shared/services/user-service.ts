import {computed, Injectable, signal} from '@angular/core';
import {UserInterface} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<UserInterface[]>([]);

  constructor() {
    this.setUserList();
  }

  private setUserList() {
    const initialData: UserInterface[] = [
      {
        id: 1,
        name: 'Boris Ivanov',
        email: 'boris@mail.com',
        active: true
      },
      {
        id: 2,
        name: 'Alisa Petrova',
        email: 'alisa@mail.com',
        active: false
      },
      {
        id: 3,
        name: 'Dmitry Sokolov',
        email: 'dmitry@mail.com',
        active: true
      },
      {
        id: 4,
        name: 'Elena Volkova',
        email: 'elena@mail.com',
        active: false
      },
      {
        id: 5,
        name: 'Fedor Nikitin',
        email: 'fedor@mail.com',
        active: true
      },
      {
        id: 6,
        name: 'Galina Belova',
        email: 'galina@mail.com',
        active: true
      },
      {
        id: 7,
        name: 'Herman Kuznetsov',
        email: 'herman@mail.com',
        active: false
      },
      {
        id: 8,
        name: 'Irina Morozova',
        email: 'irina@mail.com',
        active: true
      },
      {
        id: 9,
        name: 'Kirill Lebedev',
        email: 'kirill@mail.com',
        active: false
      },
      {
        id: 10,
        name: 'Larisa Orlova',
        email: 'larisa@mail.com',
        active: true
      },
      {
        id: 11,
        name: 'Maxim Voronin',
        email: 'maxim@mail.com',
        active: false
      },
      {
        id: 12,
        name: 'Natalia Simonova',
        email: 'natalia@mail.com',
        active: true
      },
      {
        id: 13,
        name: 'Oleg Pavlov',
        email: 'oleg@mail.com',
        active: true
      },
      {
        id: 14,
        name: 'Polina Guseva',
        email: 'polina@mail.com',
        active: false
      },
      {
        id: 15,
        name: 'Roman Zhukov',
        email: 'roman@mail.com',
        active: true
      },
      {
        id: 16,
        name: 'Svetlana Fomina',
        email: 'svetlana@mail.com',
        active: false
      },
      {
        id: 17,
        name: 'Timur Vasiliev',
        email: 'timur@mail.com',
        active: true
      },
      {
        id: 18,
        name: 'Uliana Egorova',
        email: 'uliana@mail.com',
        active: true
      },
      {
        id: 19,
        name: 'Viktor Petrov',
        email: 'viktor@mail.com',
        active: false
      },
      {
        id: 20,
        name: 'Zoya Ivanova',
        email: 'zoya@mail.com',
        active: true
      }
    ]
    this.users.set(initialData);
  }

  public getFilteredUserList(search: string = '', status: string) {
    return computed(() => {
      return this.users().filter(user => {
        const nameMatches = !search ||
          user.name.toLowerCase().includes(search.toLowerCase());

        const statusMatches = status === 'all' ||
          user.active === (status == 'active');

        return nameMatches && statusMatches;
      });
    });
  }
}
