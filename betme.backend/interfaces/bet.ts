export interface IBet {
  id: number;
  user_id: number;
  match_id: number;
  owner_username: string;
  bet_accepted: boolean;
  team_selected?: string;
  win?: boolean;
  bet_status: BetStatus;
  stakes: number;
  accepted_participants: number;
  created_at: Date;
  updated_at: Date;
}

export enum BetStatus {
  active = 'active',
  pending = 'pending',
  completed = 'completed',
  canceled = 'canceled'
}
