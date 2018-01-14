import { ModelBase } from './model-base';
import { Player } from './player';

export class Team extends ModelBase<Team> {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }


    private _Players: Array<Player>;
    public get Players(): Array<Player> {
        return this._Players;
    }
    public set Players(v: Array<Player>) {
        this._Players = v;
    }

}
