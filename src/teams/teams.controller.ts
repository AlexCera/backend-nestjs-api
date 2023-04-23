import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto, UpdateTeamDto } from './dto/teams.dto';

@Controller('teams')
export class TeamsController {

    constructor(private teamsService: TeamsService) { }

    @Get()
    getAllTeams() {
        return this.teamsService.getAllTeams();
    }

    @Post()
    createTeam(@Body() newTeam: CreateTeamDto) {
        return this.teamsService.createTeam(newTeam);
    }

    @Delete(':id')
    deleteTeam(@Param('id') id: string) {
        this.teamsService.deleteTeam(id);
        return true
    }

    @Patch(':id')
    updateTeam(@Param('id') id: string, @Body() team: UpdateTeamDto) {
        return this.teamsService.updateTeam(id, team);
    }
}
