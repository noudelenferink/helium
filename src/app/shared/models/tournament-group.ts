import { ModelBase } from './model-base';
import { Team } from './team';

export class TournamentGroup extends ModelBase<TournamentGroup> {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }


    private _Teams: Array<Team>;
    public get Teams(): Array<Team> {
        return this._Teams;
    }
    public set Teams(v: Array<Team>) {
        this._Teams = v;
    }
}
