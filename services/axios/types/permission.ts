export enum RoleEnum {
  ROOT = 1,
  ADMIN = 2,
  LEADER = 3,
  SALES = 4,
  SUPPORT = 5,
  SUBSCRIBER = 6,
  GUEST = 7,
  AGENCY = 8,
  CEO = 9,
  ACCOUNTANT = 10,
  DEV = 11,
}

export type Role = {
  id: RoleEnum;
  name: string;
  guard_name: string;
};

export type Permission = {
  id: number;
  name: string;
  guard_name: string;
};
