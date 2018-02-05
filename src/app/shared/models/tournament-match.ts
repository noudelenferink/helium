import { ModelBase } from './model-base';
import { Team } from './team';
import { Tournament } from './tournament';
import { KnockoutInfo } from './knockout-info';
import { KOOrigin } from '../../tournament-manager-module/components/tournament-generator/tournament-generator.component';

export class TournamentMatch extends ModelBase<TournamentMatch> {
    private _HomeTeam: Team;
    public get HomeTeam(): Team {
        return this._HomeTeam;
    }
    public set HomeTeam(v: Team) {
        this._HomeTeam = v;
    }

    private _AwayTeam: Team;
    public get AwayTeam(): Team {
        return this._AwayTeam;
    }
    public set AwayTeam(v: Team) {
        this._AwayTeam = v;
    }

    private _Tournament: Tournament;
    public get Tournament(): Tournament {
        return this._Tournament;
    }
    public set Tournament(v: Tournament) {
        this._Tournament = v;
    }

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }


    private _HomeOrigin: KOOrigin;
    public get HomeOrigin(): KOOrigin {
        return this._HomeOrigin;
    }
    public set HomeOrigin(v: KOOrigin) {
        this._HomeOrigin = v;
    }

    private _AwayOrigin: KOOrigin;
    public get AwayOrigin(): KOOrigin {
        return this._AwayOrigin;
    }
    public set AwayOrigin(v: KOOrigin) {
        this._AwayOrigin = v;
    }
}
