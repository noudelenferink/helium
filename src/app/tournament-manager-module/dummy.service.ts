import { Injectable } from '@angular/core';
import { Player } from '../shared/models/player';
import { Category } from '../shared/models/category';

@Injectable()
export class DummyService {

  constructor() { }

  getCategories(): Array<Category> {
    return [
      new Category({ Id: 1, Name: 'Bornerbroek 3' }),
      new Category({ Id: 2, Name: 'Bornerbroek 4' })
    ];
  }

  getPlayers(): Array<Player> {
    let categories = this.getCategories();
    return [
      new Player({ Id: 1, Name: 'Nick Oude Lenferink', Category: categories[1] }),
      new Player({ Id: 2, Name: 'Vincent Lubbers', Category: categories[1] }),
      new Player({ Id: 3, Name: 'Michel Peeze', Category: categories[1] }),
      new Player({ Id: 5, Name: 'Kenny Rikkert', Category: categories[1] }),
      new Player({ Id: 6, Name: 'Daan Veldhof', Category: categories[1] }),
      new Player({ Id: 8, Name: 'Nick Brummer', Category: categories[1] }),
      new Player({ Id: 9, Name: 'Jelle Klaassen', Category: categories[1] }),
      new Player({ Id: 11, Name: 'Stijn Kamphuis', Category: categories[1] }),
      new Player({ Id: 12, Name: 'Niels Pigge', Category: categories[1] }),
      new Player({ Id: 13, Name: 'Rodger ten Hag', Category: categories[1] }),
      new Player({ Id: 20, Name: 'Maarten Bonsing', Category: categories[1] }),
      new Player({ Id: 21, Name: 'Marc Krabben', Category: categories[1] }),
      new Player({ Id: 26, Name: 'Coen Bokdam', Category: categories[1] }),
      new Player({ Id: 27, Name: 'Tom Voshaar', Category: categories[1] }),
      new Player({ Id: 34, Name: 'Rene Woolderink', Category: categories[1] }),
      new Player({ Id: 35, Name: 'Ruben ten Asbroek', Category: categories[1] }),
      new Player({ Id: 38, Name: 'Peter Woolderink', Category: categories[1] }),
      new Player({ Id: 40, Name: 'Martin Groothuis', Category: categories[1] }),
      new Player({ Id: 41, Name: 'Bart Klaassen', Category: categories[1] }),
      new Player({ Id: 42, Name: 'Jord Ledeboer', Category: categories[1] }),
      new Player({ Id: 22, Name: 'Peter Semmekrot', Category: categories[0] }),
      new Player({ Id: 23, Name: 'Tom Peeze', Category: categories[0] }),
      new Player({ Id: 33, Name: 'Jan Platenkamp', Category: categories[0] }),
      new Player({ Id: 32, Name: 'Youri Nijenkamp', Category: categories[0] }),
      new Player({ Id: 30, Name: 'George ten Hag', Category: categories[0] }),
      new Player({ Id: 17, Name: 'Stef Olthof', Category: categories[0] }),
      new Player({ Id: 16, Name: 'Nick Arkink', Category: categories[0] }),
      new Player({ Id: 46, Name: 'Ivar Homma', Category: categories[0] }),
      new Player({ Id: 28, Name: 'Maarten Arkink', Category: categories[0] }),
      new Player({ Id: 29, Name: 'Joran Bartels', Category: categories[0] }),
      new Player({ Id: 47, Name: 'Tim Helle', Category: categories[0] }),
      new Player({ Id: 31, Name: 'Tom Ketelaar', Category: categories[0] }),
      new Player({ Id: 7, Name: 'Koen Peeze', Category: categories[0] }),
      new Player({ Id: 39, Name: 'Pim Koopman', Category: categories[0] }),
      new Player({ Id: 37, Name: 'Jeroen Spoolder', Category: categories[0] }),
      new Player({ Id: 19, Name: 'Jordy Siebum', Category: categories[0] }),
      new Player({ Id: 43, Name: 'Maarten Holtkamp', Category: categories[0] }),
      new Player({ Id: 44, Name: 'Maikel Eshuis', Category: categories[0] }),
      new Player({ Id: 10, Name: 'Michel Pigge', Category: categories[0] }),
      new Player({ Id: 45, Name: 'Michiel Peeze', Category: categories[0] }),

    ];
  }
}
