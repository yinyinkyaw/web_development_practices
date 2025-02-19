export function getMonthlyPayment(param: {
  amount: number;
  annualInterestRate: number;
  years: number;
  mortgageType: "repayment" | "interest-only";
}) {
  const { amount, annualInterestRate, years, mortgageType } = param;

  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalMonths = years * 12;
  let monthlyPayment = 0;
  let totalPayments = 0;

  if (mortgageType === "repayment") {
    const compoundInterest =
      monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, totalMonths) - 1;
    monthlyPayment = amount * (compoundInterest / denominator);
    totalPayments = monthlyPayment * totalMonths;
  } else if (mortgageType === "interest-only") {
    monthlyPayment = amount * monthlyInterestRate;
    totalPayments = monthlyPayment * totalMonths;
  }

  return {
    monthlyPayment: monthlyPayment,
    totalPayments: totalPayments,
  };
}

export function formatCurrency() {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
}
