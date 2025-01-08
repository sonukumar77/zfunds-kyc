import { INITIAL_KYC_DATA_Props } from "@/models/kyc";

interface DeclarationListProps {
  id: number;
  title: string;
  name: keyof INITIAL_KYC_DATA_Props;
}

export const DECLARTION_LIST: DeclarationListProps[] = [
  {
    id: 1,
    title: "Indian citizen",
    name: "isIndianCitizen",
  },
  {
    id: 2,
    title: "Indian tax resident.",
    name: "isIndianTaxResident",
  },
  {
    id: 3,
    title: "Not politically exposed.",
    name: "isNotPoliticallyExpose",
  },
];
