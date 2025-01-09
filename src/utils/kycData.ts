import { INCOME_LIST } from "@/constants/common";

export const findIncomeLabel = (key: string) => {
  const incomeLabel = INCOME_LIST.find((element) =>
    element.value === key ? element : undefined
  );

  return incomeLabel?.label || key;
};
