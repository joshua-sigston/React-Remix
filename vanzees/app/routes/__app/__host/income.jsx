import { useOutletContext } from "@remix-run/react";

export default function ReviewsPage() {
    const { totalIncome } = useOutletContext();

    return (
        <section className="income_container">
            <h2>Income</h2>
            <div className="total">
                <h3>Your total income to date is: <span>${totalIncome}</span></h3>
            </div>
            <div className="transactions grid">
                <h3>Total transactions: 4</h3>
                <div className="transaction flex_row">
                    <p>$750</p>
                    <p>Oct 5, 2022</p>
                </div>
                <div className="transaction flex_row">
                    <p>$450</p>
                    <p>April 4, 2023</p>
                </div>
                <div className="transaction flex_row">
                    <p>$750</p>
                    <p>June 15, 2023</p>
                </div>
            </div>
        </section>
    )
}