import { TeamLeague } from "../teams.entity"
import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';


export class CreateTeamDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string
    @IsNumber()
    players: number
    @IsString()
    @IsNotEmpty()
    @IsIn([TeamLeague.BUNDESLIGA, TeamLeague.LIGA, TeamLeague.LIGUE, TeamLeague.PREMIER, TeamLeague.SERIE])
    league: TeamLeague
}

export class UpdateTeamDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    name?: string
    @IsNumber()
    @IsOptional()
    players?: number
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    league?: TeamLeague
}