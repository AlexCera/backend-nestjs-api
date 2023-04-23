import { Injectable } from '@nestjs/common';
import { Team, TeamLeague } from './teams.entity';
import { v4 } from 'uuid';
import { UpdateTeamDto } from './dto/teams.dto';

@Injectable()
export class TeamsService {

    private teams: Team[] = [
        {
            id: '1',
            name: 'PSG',
            players: 29,
            league: TeamLeague.LIGUE
        },
    ]

    getAllTeams(): Team[] {
        return this.teams;
    }

    getTeamById(id: string): Team {
        return this.teams.find(team => team.id === id);
    }

    createTeam(team: any) {
        team.id = v4()
        this.teams.push(team)
        return team;
    }

    deleteTeam(teamId: string): Boolean {
        this.teams = this.teams.filter((team) => {
            team.id !== teamId;
        })
        return true;
    }

    updateTeam(id: string, team: UpdateTeamDto): Team {
        const row = this.getTeamById(id)
        if (row) {
            const updatedTeam = Object.assign(row, team);
            this.teams.map(team => team.id === id ? updatedTeam : team)
            return updatedTeam
        }
    }

}
