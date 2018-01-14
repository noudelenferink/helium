import { ModelBase } from './model-base';

export class Category extends ModelBase<Category> {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

}
