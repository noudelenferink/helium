export abstract class ModelBase<T> {
    private _Id: number;
    public get Id(): number {
        return this._Id;
    }
    public set Id(v: number) {
        this._Id = v;
    }

    public constructor(init?: Partial<T>) {
        Object.assign(this, init);
    }
}
