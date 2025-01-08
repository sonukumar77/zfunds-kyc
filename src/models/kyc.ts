export type MaritalStatusProps = {
  value: string;
  label: string;
};

export interface INITIAL_KYC_DATA_Props {
  maritalStatus: string;
  fatherName: string;
  motherName: string;
  email: string;
  income: string;
  isIndianCitizen: boolean;
  isIndianTaxResident: boolean;
  isNotPoliticallyExpose: boolean;
  panImage: string;
  signImage: string;
}
