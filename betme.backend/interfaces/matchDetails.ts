export interface IMatchDetails {
  id: number;
  bet_id: number;
  match_id: number;
  game: Game;
  start_time: Date;
  team_one_short_name: string;
  team_two_short_name: string;
  team_one_long_name: string;
  team_two_long_name: string;
  team_one_logo_url: string;
  team_two_logo_url: string;
  match_winner?: string;
  created_at: Date;
  updated_at: Date;
}

export enum Game {
  lol = 'lol',
  ow = 'ow',
  dota = 'dota',
  csgo = 'csgo'
}
