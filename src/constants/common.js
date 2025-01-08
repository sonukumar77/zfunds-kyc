export const MARITAL_STATUS_LIST = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
export const INCOME_LIST = [
  { value: "below_1_lakh", label: "Below 1 lakh" },
  { value: "1_to_5_lakh", label: "1-5 lakh" },
  { value: "5_to_10_lakh", label: "5-10 lakh" },
  { value: "above_10_lakh", label: ">10 lakh" },
];

export const EMAIL_SUBDOMAINS = [
  "@gmail.com",
  "@yahoo.com",
  "@yahoo.co.in",
  "@rediffmail.com",
];

export const DECLARTION_LIST = [
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

export const RANDOM_USER_URL = "https://randomuser.me/api/portraits/men/90.jpg";

export const FAKE_USER_DATA = {
  userDetails: [
    {
      title: "Pan Card No.",
      value: "Indian Citizen",
    },
    {
      title: "Name",
      value: "Tanvi Yadav",
    },
  ],
  personalDetails: [
    {
      title: "Gender",
      value: "Female",
    },
    {
      title: "Date Of Birth",
      value: "12/10/2000",
    },
    {
      title: "Adresss",
      value: "250 falt No.,second floor,Sector 57,Sushant Lok Phase 2",
    },
    {
      title: "Pincode",
      value: "122003",
    },
  ],

  KYCDetails: [],
  DocumentDetails: [
    {
      title: "Photo",
      value: RANDOM_USER_URL,
    },
  ],
};

export const INITIAL_KYC_DATA = {
  maritalStatus: "",
  fatherName: "",
  motherName: "",
  email: "",
  income: "",
  isIndianCitizen: false,
  isIndianTaxResident: false,
  isNotPoliticallyExpose: false,
  panImage: "",
  signImage: "",
};
