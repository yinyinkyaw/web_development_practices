import EmptyIllustration from "../assets/illustration-empty.svg";
import "../styles/empty-page.css";

export default function EmptyResultComponent() {
  return (
    <article class="empty_container">
      <EmptyIllustration />
      <p>
        Complete the form and click "calculate payments" to see what your
        monthly repayments would be.
      </p>
    </article>
  );
}
