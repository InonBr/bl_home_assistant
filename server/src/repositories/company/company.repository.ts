import { Company } from "../../entities/CompanyEntity";
import { CompanyQuerySchemaType } from "../../routes/company/companyRoutes.schemas";
import { appDataSource } from "../../systems/typeOrm.config";
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

export const findCompanyById = async (companyId: string) =>
  await Company.findOneBy({
    companyId,
  });

const createQuery = (
  word: string | undefined,
  searchType?: "eq" | "sw" | "ew" | "mi"
) => {
  if (!searchType || searchType === "eq" || !word) {
    return word;
  }

  if (searchType === "ew") {
    return `%${word}`;
  }

  if (searchType === "sw") {
    return `${word}%`;
  }

  return `%${word}%`;
};

const createQueryArray = (queryData: any) => {
  const { address, companyName, phone } = queryData;

  return [phone, companyName, address].filter(
    (element) => element !== undefined
  );
};

export const findCompanies = async (queryData: CompanyQuerySchemaType) => {
  const {
    companyNameSearchType,
    address,
    companyName,
    addressSearchType,
    phone,
  } = queryData;

  const query = `SELECT *
    FROM bl.company
    ${address || companyName || phone ? "WHERE" : ""}
    ${phone ? "phone LIKE ? " : ""}
    ${phone ? "AND " : ""}
    ${companyName ? `name LIKE ? ` : ""}
    ${phone || companyName ? "AND " : ""}
    ${address ? `address LIKE ?` : ""};`;

  const queryArray = createQueryArray({
    address: createQuery(address, addressSearchType),
    companyName: createQuery(companyName, companyNameSearchType),
    phone,
  });

  return await appDataSource.manager.query(query, queryArray);
};
