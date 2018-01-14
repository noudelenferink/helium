import { ModelBase } from './model-base';
import { Category } from './category';

export class Player extends ModelBase<Player> {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

    private _Category: Category;
    public get Category(): Category {
        return this._Category;
    }
    public set Category(v: Category) {
        this._Category = v;
    }


}
