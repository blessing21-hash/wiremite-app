import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../Pages/Dashboard/Dashboard.css"


function Dashboard() {
  const [form, setForm] = useState({ recipient: "", amount: "", note: "" });
  const [transactions, setTransactions] = useState([
    { id: 1, recipient: "John Doe", amount: 50, note: "Lunch", date: "2025-08-14" },
    { id: 2, recipient: "Sarah Smith", amount: 100, note: "Gift", date: "2025-08-13" },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMoney = (e) => {
    e.preventDefault();
    if (!form.recipient || !form.amount) {
      alert("Please fill in all required fields.");
      return;
    }
    const newTransaction = {
      id: transactions.length + 1,
      recipient: form.recipient,
      amount: parseFloat(form.amount),
      note: form.note,
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions([newTransaction, ...transactions]);
    setForm({ recipient: "", amount: "", note: "" });
    alert("Money sent successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* Ads Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="carousel-slide">
          <img src="/ads/ad1.jpeg" alt="Promo 1" />
          <p className="legend">Special offer: Send money fee-free this weekend!</p>
        </div>
        <div className="carousel-slide">
          <img src="/ads/ad2.jpeg" alt="Promo 2" />
          <p className="legend">Get 10% cashback on your first transfer!</p>
        </div>
      </Carousel>

      {/* Send Money Section */}
      <section className="send-money-section">
        <h2>Send Money</h2>
        <form onSubmit={handleSendMoney} className="send-money-form">
          <input
            type="text"
            name="recipient"
            placeholder="Recipient Name"
            value={form.recipient}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />
          <input
            type="text"
            name="note"
            placeholder="Note (optional)"
            value={form.note}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Transaction History */}
      <section className="transaction-history">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.recipient}</td>
                <td>${t.amount.toFixed(2)}</td>
                <td>{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default Dashboard;