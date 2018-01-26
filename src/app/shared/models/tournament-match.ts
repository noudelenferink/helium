import { ModelBase } from './model-base';
import { Team } from './team';
import { Tournament } from './tournament';
import { KnockoutInfo } from './knockout-info';

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

    private _HomeKnockoutInfo: KnockoutInfo;
    public get HomeKnockoutInfo(): KnockoutInfo {
        return this._HomeKnockoutInfo;
    }
    public set HomeKnockoutInfo(v: KnockoutInfo) {
        this._HomeKnockoutInfo = v;
    }
}
