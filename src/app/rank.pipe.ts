import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {
  ranks: Map<number, string>;

  constructor() {
    this.ranks = new Map<number, string>();
    this.ranks.set(1, 'Best');
    this.ranks.set(2, '2nd best');
    this.ranks.set(3, '3rd best');
    this.ranks.set(4, '4th best');
    this.ranks.set(5, '5th best');
    this.ranks.set(6, '6th best');
    this.ranks.set(7, '7th best');
    this.ranks.set(8, '8th best');
    this.ranks.set(9, '9th best');
    this.ranks.set(10, '10th best');
  }

  transform(value: number): any {
    return this.ranks.get(value);
  }

}
