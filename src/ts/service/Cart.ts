import Buble from '../domain/Buble';

export default class Cart {
  private _items: Buble[] = [];

  add(item: Buble): void {
    this._items.push(item);
  }

  get items(): Buble[] {
    return [...this._items];
  }
}
