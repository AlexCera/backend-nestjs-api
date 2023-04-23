export enum TeamLeague {
    PREMIER = 'Premier League',
    LIGA = 'La Liga',
    SERIE = 'Serie A',
    BUNDESLIGA = 'Bundesliga',
    LIGUE = 'Ligue 1'
}
export class Team {
    id: string
    name: string
    players: number
    league: TeamLeague
}