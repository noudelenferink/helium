import { ModelBase } from './model-base';
import { TournamentGroup } from './tournament-group';

export class KnockoutInfo extends ModelBase<KnockoutInfo> {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

    private _TournamenMatchId: number;
    public get TournamenMatchId(): number {
        return this._TournamenMatchId;
    }
    public set TournamenMatchId(v: number) {
        this._TournamenMatchId = v;
    }

    private _IsHomeTeam: boolean;
    public get IsHomeTeam(): boolean {
        return this._IsHomeTeam;
    }
    public set IsHomeTeam(v: boolean) {
        this._IsHomeTeam = v;
    }

    private _Group: TournamentGroup;
    public get Group(): TournamentGroup {
        return this._Group;
    }
    public set Group(v: TournamentGroup) {
        this._Group = v;
    }

    private _GroupPosition: number;
    public get GroupPosition(): number {
        return this._GroupPosition;
    }
    public set GroupPosition(v: number) {
        this._GroupPosition = v;
    }

    private _Rank: number;
    public get Rank(): number {
        return this._Rank;
    }
    public set Rank(v: number) {
        this._Rank = v;
    }

    private _RoundNumber: number;
    public get RoundNumber(): number {
        return this._RoundNumber;
    }
    public set RoundNumber(v: number) {
        this._RoundNumber = v;
    }

    private _NextKnockout: KnockoutInfo;
    public get NextKnockout(): KnockoutInfo {
        return this._NextKnockout;
    }
    public set NextKnockout(v: KnockoutInfo) {
        this._NextKnockout = v;
    }
}
