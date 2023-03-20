import { Company } from "../../entities/CompanyEntity";

export interface CreateNewOrderInterface {
  employId: string;
  item: string;
  company: Company;
}
