import { createSignal, For, Show } from "solid-js";
import "../styles/calculator.css";
import EmptyResultComponent from "./empty-result";
import CalculatorIcon from "../assets/icon-calculator.svg";
import { z } from "zod";
import { Field, useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import ErrorMessage from "./error-message";
import { getMonthlyPayment } from "../actions/calculateMortgage";
import CalculationResultContainer from "./calculation-result";

export const mortgageSchema = z.object({
  amount: z.number().min(1, { message: "This field is required." }),
  term: z.number().min(1, { message: "This field is required." }),
  interest_rate: z.number().min(1, { message: "This field is required" }),
  type: z.enum(["repayment", "interest-only"], {
    required_error: "This field is required",
    message: "Invalid input type",
  }),
});

export default function MortgageCalculator() {
  const [mortgage, setMortgage] = createSignal<{
    monthlyPayment: number;
    totalPayments: number;
  } | null>(null);
  const formHandler = useFormHandler(zodSchema(mortgageSchema));
  const { formData } = formHandler;

  const submit = async (event: Event) => {
    event.preventDefault();
    try {
      await formHandler.validateForm();
      const fd = formData();
      const result = getMonthlyPayment({
        amount: fd.amount,
        annualInterestRate: fd.interest_rate,
        years: fd.term,
        mortgageType: fd.type,
      });
      setMortgage(result);
    } catch (error) {
      console.error(error);
    }
  };

  const mortgageTypes = [
    {
      label: "Repayment",
      value: "repayment",
    },
    {
      label: "Interest Only",
      value: "interest-only",
    },
  ];

  return (
    <section class="calculator_card">
      <article class="calculator_container">
        <header class="flex_row">
          <h5 class="calculator_title text-black">Mortgage Calculator</h5>
          <button
            class="reset_btn"
            on:click={() => {
              formHandler.resetForm();
              setMortgage(null);
            }}
          >
            Clear All
          </button>
        </header>
        <form class="form" autocomplete="off" onSubmit={submit}>
          <Field
            mode="input"
            name="amount"
            formHandler={formHandler}
            render={(field) => (
              <div class="form_item">
                <label for={field.props.id} class="form_label">
                  Mortgage Amount
                </label>
                <div
                  class="form_input_container"
                  classList={{ "invalid-input": field.helpers.error }}
                >
                  <p>£</p>
                  <input {...field.props} type="number" class="form_input" />
                </div>
                <Show when={field.helpers.error}>
                  <ErrorMessage message={field.helpers.errorMessage} />
                </Show>
              </div>
            )}
          />
          <div class="form_field_row">
            <Field
              mode="input"
              name="term"
              formHandler={formHandler}
              render={(field) => (
                <div class="form_item">
                  <label html-for="term" class="form_label">
                    Mortgage Term
                  </label>
                  <div
                    class="form_input_container"
                    classList={{ "invalid-input": field.helpers.error }}
                  >
                    <input {...field.props} class="form_input" type="number" />
                    <p>years</p>
                  </div>
                  <Show when={field.helpers.error}>
                    <ErrorMessage message={field.helpers.errorMessage} />
                  </Show>
                </div>
              )}
            />
            <Field
              mode="input"
              name="interest_rate"
              formHandler={formHandler}
              render={(field) => (
                <div class="form_item">
                  <label html-for="interest_rate" class="form_label">
                    Interest Rate
                  </label>
                  <div
                    class="form_input_container"
                    classList={{ "invalid-input": field.helpers.error }}
                  >
                    <input
                      {...field.props}
                      class="form_input"
                      type="number"
                      step={0.001}
                    />
                    <p>%</p>
                  </div>
                  <Show when={field.helpers.error}>
                    <ErrorMessage message={field.helpers.errorMessage} />
                  </Show>
                </div>
              )}
            />
          </div>
          <Field
            mode="radio-group"
            name="type"
            formHandler={formHandler}
            render={(field) => (
              <div class="form_item">
                <label for="type" class="form_label">
                  Mortgage Type
                </label>
                <div class="radio_input_container">
                  <For each={mortgageTypes}>
                    {(type) => (
                      <div
                        class="radio_input_item"
                        classList={{
                          selected: field.helpers.isChecked(type.value),
                        }}
                      >
                        <input
                          {...field.props}
                          value={type.value}
                          type="radio"
                          id={type.value}
                          checked={field.helpers.isChecked(type.value)}
                        />
                        <label for={type.value}>{type.label}</label>
                      </div>
                    )}
                  </For>
                </div>
                <Show when={field.helpers.error}>
                  <ErrorMessage message={field.helpers.errorMessage} />
                </Show>
              </div>
            )}
          />
          <button class="form_action_btn" type="submit">
            <CalculatorIcon />
            Calculate Repayments
          </button>
        </form>
      </article>
      <Show fallback={<EmptyResultComponent />} when={mortgage() !== null}>
        <CalculationResultContainer
          monthlyPayment={mortgage()?.monthlyPayment ?? 0}
          totalPayments={mortgage()?.totalPayments ?? 0}
        />
      </Show>
    </section>
  );
}
