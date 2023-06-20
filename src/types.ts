export type Assert = <T = any>(
  value: T,
  status?: number,
  msg?: string,
  opts?: {}
) => asserts value is NonNullable<T>;

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
  blackout_dates: string;
  txt_alerts: boolean;
  email_alerts: boolean;
};

export type Volunteer = {
  // only shows when a user gets assigned to a position
  id: number;
  user: User;
  plan_id: number;
  confirmation_status: string;
  notes: string;
};

export type Position = {
  id: number;
  volunteers: Volunteer[]; // people assigned to this position
  name: string;
  capacity: number;
  filled: number;
};

export type Team = {
  id: number;
  name: string;
  description: string;
  positions: Position[];
};

export type Plan = {
  id: number;
  name: string;
  confirmed: number;
  pending: number;
  declined: number;
  teams: Team[];
  date: Date;
};

// const plan: Plan;

// plan.teams.map((team) => ({
//   <div>{team.name}</div>
//   <div>{team.accepted}</div>
//   <div>{team.pending}</div>
//   <div>{team.declined}</div>
//   team.positions.map((position) => {
//     <div>{position.name}</div>
//     position.volunteers.map((volunteer) => {
//       <avatar>
//         <icon>volunteer.confirmation_status</icon>
//         <badge class={volunteer.confirmation_status}>volunteer.user.first_name</badge>  // strike if status is declined
//       </avatar>
//     })
//     if(position.capacity - position.filled > 0)
//     {
//       <button onClick(() => openPositionAssignmentModal())>
//         <avatar>
//           <icon>{position.capacity - position.filled}</icon>
//           <badge>Needed</badge>
//         </avatar>
//       </button>
//     }
//   })
// }));
