import { Company } from "../../entities/CompanyEntity";
import { CreateCompanyInterface } from "./company.interfaces";

export const createNewCompany = async (companyData: CreateCompanyInterface) => {
  const { address, name, phone } = companyData;

  const newCompany = Company.create({
    address,
    name,
    phone,
  });

  await newCompany.save();

  return newCompany;
};
