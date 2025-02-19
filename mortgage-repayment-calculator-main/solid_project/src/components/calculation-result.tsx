import { formatCurrency } from "../actions/calculateMortgage";

export default function CalculationResultContainer(props: {
  monthlyPayment: number;
  totalPayments: number;
}) {
  return (
    <section class="result_container">
      <header>
        <h5 class="calculator_title text-white">Your results</h5>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayment"
          again.
        </p>
      </header>
      <div class="mortgage_calculation_result">
        <div>
          <span>Your monthly repayments</span>
          <p class="monthly_payment text-lime">
            {formatCurrency().format(props.monthlyPayment)}
          </p>
        </div>
        <span class="separator" />
        <div>
          <span>Total you'll repay over the term</span>
          <p class="yearly_payment text-white">
            {formatCurrency().format(props.totalPayments)}
          </p>
        </div>
      </div>
    </section>
  );
}
