import { Permission, Role } from "./permission";

export enum UserType {
  MEMBER = "MEMBER",
  CUSTOMER = "CUSTOMER",
}

export type Team = {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
  branch_id: number;
  users_count: number | null;
};

export type User = {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  user_type: UserType;
  phone: string | null;
  point: number | null;
  team_id: number | null;
  branch_id: number | null;
  creator_id: number | null;
  support_id: number | null;
  status: boolean;
  code: string | null;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  referral_code: string | null;
  team?: Team;
  permissions?: Permission[];
  roles?: Role[];
  plansubscription?: string[];
};
