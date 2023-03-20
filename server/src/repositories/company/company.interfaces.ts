export interface CreateCompanyInterface {
  name: string;
  phone: string;
  address: string;
}

export interface CompanyQuery {
  companyName?: string;
  itemName?: string;
  phone?: string;
  companyNameSearchType: "eq" | "sw" | "ew" | "mi";
  contactNameSearchType: "eq" | "sw" | "ew" | "mi";
}
