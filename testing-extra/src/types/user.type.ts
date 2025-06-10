import { Company } from "./company.type"
import { Address } from "./location.type"

export type User = {
  id: number | null,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company?: Company,
};

export type UserIdType = string | null | number | undefined;