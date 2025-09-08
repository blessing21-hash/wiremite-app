// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../Pages/Dashboard/Dashboard.css"


// function Dashboard() {
//   const [form, setForm] = useState({ recipient: "", amount: "", note: "" });
//   const [transactions, setTransactions] = useState([
//     { id: 1, recipient: "John Doe", amount: 50, note: "Lunch", date: "2025-08-14" },
//     { id: 2, recipient: "Sarah Smith", amount: 100, note: "Gift", date: "2025-08-13" },
//   ]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSendMoney = (e) => {
//     e.preventDefault();
//     if (!form.recipient || !form.amount) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     const newTransaction = {
//       id: transactions.length + 1,
//       recipient: form.recipient,
//       amount: parseFloat(form.amount),
//       note: form.note,
//       date: new Date().toISOString().split("T")[0],
//     };
//     setTransactions([newTransaction, ...transactions]);
//     setForm({ recipient: "", amount: "", note: "" });
//     alert("Money sent successfully!");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Ads Carousel */}
//       <Carousel
//         autoPlay
//         infiniteLoop
//         interval={4000}
//         showThumbs={false}
//         showStatus={false}
//       >
//         <div className="carousel-slide">
//           <img src="/ads/ad1.jpeg" alt="Promo 1" />
//           <p className="legend">Special offer: Send money fee-free this weekend!</p>
//         </div>
//         <div className="carousel-slide">
//           <img src="/ads/ad2.jpeg" alt="Promo 2" />
//           <p className="legend">Get 10% cashback on your first transfer!</p>
//         </div>
//       </Carousel>

//       {/* Send Money Section */}
//       <section className="send-money-section">
//         <h2>Send Money</h2>
//         <form onSubmit={handleSendMoney} className="send-money-form">
//           <input
//             type="text"
//             name="recipient"
//             placeholder="Recipient Name"
//             value={form.recipient}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             value={form.amount}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="note"
//             placeholder="Note (optional)"
//             value={form.note}
//             onChange={handleChange}
//           />
//           <button type="submit">Send</button>
//         </form>
//       </section>

//       {/* Transaction History */}
//       <section className="transaction-history">
//         <h2>Transaction History</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Recipient</th>
//               <th>Amount</th>
//               <th>Note</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((t) => (
//               <tr key={t.id}>
//                 <td>{t.date}</td>
//                 <td>{t.recipient}</td>
//                 <td>${t.amount.toFixed(2)}</td>
//                 <td>{t.note}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }
// export default Dashboard;


// import React, { useState, useEffect } from "react";
// import "../../Pages/Dashboard/Dashboard.css"
// import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar/Navbar";

// // Mock transactions (15 items)
// const mockTransactions = [
//   { id: 1, date: "2025-08-01", amount: 200, fee: 20, final: 180, currency: "GBP" },
//   { id: 2, date: "2025-08-02", amount: 100, fee: 20, final: 80, currency: "ZAR" },
//   { id: 3, date: "2025-08-03", amount: 300, fee: 30, final: 270, currency: "GBP" },
//   { id: 4, date: "2025-08-04", amount: 400, fee: 80, final: 320, currency: "ZAR" },
//   { id: 5, date: "2025-08-05", amount: 150, fee: 15, final: 135, currency: "GBP" },
//   { id: 6, date: "2025-08-06", amount: 250, fee: 25, final: 225, currency: "GBP" },
//   { id: 7, date: "2025-08-07", amount: 500, fee: 100, final: 400, currency: "ZAR" },
//   { id: 8, date: "2025-08-08", amount: 350, fee: 35, final: 315, currency: "GBP" },
//   { id: 9, date: "2025-08-09", amount: 120, fee: 24, final: 96, currency: "ZAR" },
//   { id: 10, date: "2025-08-10", amount: 600, fee: 60, final: 540, currency: "GBP" },
//   { id: 11, date: "2025-08-11", amount: 700, fee: 140, final: 560, currency: "ZAR" },
//   { id: 12, date: "2025-08-12", amount: 90, fee: 9, final: 81, currency: "GBP" },
//   { id: 13, date: "2025-08-13", amount: 220, fee: 22, final: 198, currency: "GBP" },
//   { id: 14, date: "2025-08-14", amount: 800, fee: 160, final: 640, currency: "ZAR" },
//   { id: 15, date: "2025-08-15", amount: 450, fee: 45, final: 405, currency: "GBP" },
// ];

// const ads = [
//   { id: 1, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+1", alt: "Ad 1" },
//   { id: 2, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+2", alt: "Ad 2" },
//   { id: 3, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+3", alt: "Ad 3" },
// ];

// const Dashboard = () => {
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("GBP");
//   const [fxRates, setFxRates] = useState({});
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState("");

//   // Ads carousel state
//   const [currentAd, setCurrentAd] = useState(0);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     // Fetch FX rates
//     const fetchRates = async () => {
//       try {
//         const res = await fetch(
//           "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
//         );
//         const data = await res.json();

//         let rates = {};
//         data.forEach((obj) => {
//           const [key, value] = Object.entries(obj)[0];
//           rates[key] = value;
//         });
//         setFxRates(rates);
//       } catch (err) {
//         setError("⚠️ Failed to fetch FX rates. Please try again later.");
//       }
//     };

//     fetchRates();

//     // Carousel auto-slide
//     const interval = setInterval(() => {
//       setCurrentAd((prev) => (prev + 1) % ads.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Send money handler
//   const handleSend = () => {
//     setError("");
//     const amt = parseFloat(amount);

//     if (isNaN(amt) || amt <= 0) {
//       setError("Please enter a valid amount greater than 0");
//       return;
//     }

//     if (amt < 10 || amt > 1000) {
//       setError("Amount must be between $10 and $1000");
//       return;
//     }

//     if (!fxRates[currency]) {
//       setError("FX rate not available yet");
//       return;
//     }

//     let feePercent = currency === "GBP" ? 0.1 : 0.2;
//     let fee = Math.ceil(amt * feePercent);

//     let afterFee = amt - fee;
//     let converted = Math.ceil(afterFee * fxRates[currency]);

//     setResult({
//       original: amt,
//       fee,
//       afterFee,
//       converted,
//       currency,
//     });
//   };

//   // Transaction pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentTransactions = mockTransactions.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );
//   const totalPages = Math.ceil(mockTransactions.length / itemsPerPage);

//   return (
//   <>
//     <Navbar />
//     <div className="dashboard">
//       <h1>Welcome to Wiremite Dashboard</h1>

//       {/* Send Money */}
//       <section className="send-money card">
//         <h2>Send Money</h2>
//         <input
//           type="number"
//           placeholder="Enter amount in USD"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//           <option value="GBP">UK (GBP)</option>
//           <option value="ZAR">South Africa (ZAR)</option>
//         </select>
//         <button onClick={handleSend}>Send</button>
//         {error && <p className="error">{error}</p>}
//         {result && (
//           <div className="results">
//             <p>Amount Sent (USD): ${result.original}</p>
//             <p>Transaction Fee: ${result.fee}</p>
//             <p>After Fee: ${result.afterFee}</p>
//             <p>
//               Recipient Gets: {result.converted} {result.currency}
//             </p>
//           </div>
//         )}
//       </section>

//       {/* Ads */}
//       <section className="ads card">
//         <h2>Advertisements</h2>
//         <div className="carousel">
//           <img
//             src={ads[currentAd].img}
//             alt={ads[currentAd].alt}
//             className="ad-img"
//           />
//           <div className="dots">
//             {ads.map((ad, index) => (
//               <span
//                 key={ad.id}
//                 onClick={() => setCurrentAd(index)}
//                 className={index === currentAd ? "dot active" : "dot"}
//               >
//                 ●
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Transactions */}
//       <section className="transactions card">
//         <h2>Transaction History</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Amount Sent (USD)</th>
//               <th>Fee</th>
//               <th>Final Amount</th>
//               <th>Currency</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTransactions.map((tx) => (
//               <tr key={tx.id}>
//                 <td>{tx.date}</td>
//                 <td>${tx.amount}</td>
//                 <td>${tx.fee}</td>
//                 <td>
//                   {tx.final} {tx.currency}
//                 </td>
//                 <td>{tx.currency}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="pagination">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={currentPage === i + 1 ? "active" : ""}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </section>
//     </div>

//     <Footer />
//   </>
//   );
// };

// export default Dashboard;








// import React, { useState, useEffect } from "react";
// import "../../Pages/Dashboard/Dashboard.css";
// import Footer from "../../Components/Footer/Footer";
// import Navbar from "../../Components/Navbar/Navbar";

// // Initial mock transactions
// const initialTransactions = [
//   { id: 1, date: "2025-08-01", amount: 200, fee: 20, final: 180, currency: "GBP" },
//   { id: 2, date: "2025-08-02", amount: 100, fee: 20, final: 80, currency: "ZAR" },
//   { id: 3, date: "2025-08-03", amount: 300, fee: 30, final: 270, currency: "GBP" },
//   { id: 4, date: "2025-08-04", amount: 400, fee: 80, final: 320, currency: "ZAR" },
//   { id: 5, date: "2025-08-05", amount: 150, fee: 15, final: 135, currency: "GBP" },
//   { id: 6, date: "2025-08-06", amount: 250, fee: 25, final: 225, currency: "GBP" },
//   { id: 7, date: "2025-08-07", amount: 500, fee: 100, final: 400, currency: "ZAR" },
//   { id: 8, date: "2025-08-08", amount: 350, fee: 35, final: 315, currency: "GBP" },
//   { id: 9, date: "2025-08-09", amount: 120, fee: 24, final: 96, currency: "ZAR" },
//   { id: 10, date: "2025-08-10", amount: 600, fee: 60, final: 540, currency: "GBP" },
//   { id: 11, date: "2025-08-11", amount: 700, fee: 140, final: 560, currency: "ZAR" },
//   { id: 12, date: "2025-08-12", amount: 90, fee: 9, final: 81, currency: "GBP" },
//   { id: 13, date: "2025-08-13", amount: 220, fee: 22, final: 198, currency: "GBP" },
//   { id: 14, date: "2025-08-14", amount: 800, fee: 160, final: 640, currency: "ZAR" },
//   { id: 15, date: "2025-08-15", amount: 450, fee: 45, final: 405, currency: "GBP" },
// ];

// const ads = [
//   { id: 1, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+1", alt: "Ad 1" },
//   { id: 2, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+2", alt: "Ad 2" },
//   { id: 3, img: "https://via.placeholder.com/600x200?text=Wiremite+Ad+3", alt: "Ad 3" },
// ];

// const Dashboard = () => {
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("GBP");
//   const [fxRates, setFxRates] = useState({});
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const [transactions, setTransactions] = useState(initialTransactions);

//   // Ads carousel state
//   const [currentAd, setCurrentAd] = useState(0);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     // Fetch FX rates
//     const fetchRates = async () => {
//       try {
//         const res = await fetch(
//           "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
//         );
//         const data = await res.json();

//         let rates = {};
//         data.forEach((obj) => {
//           const [key, value] = Object.entries(obj)[0];
//           rates[key] = value;
//         });
//         setFxRates(rates);
//       } catch (err) {
//         setError("⚠️ Failed to fetch FX rates. Please try again later.");
//       }
//     };

//     fetchRates();

//     // Carousel auto-slide
//     const interval = setInterval(() => {
//       setCurrentAd((prev) => (prev + 1) % ads.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Send money handler
//   const handleSend = () => {
//     setError("");
//     const amt = parseFloat(amount);

//     if (isNaN(amt) || amt <= 0) {
//       setError("Please enter a valid amount greater than 0");
//       return;
//     }

//     if (amt < 10 || amt > 1000) {
//       setError("Amount must be between $10 and $1000");
//       return;
//     }

//     if (!fxRates[currency]) {
//       setError("FX rate not available yet");
//       return;
//     }

//     let feePercent = currency === "GBP" ? 0.1 : 0.2;
//     let fee = Math.ceil(amt * feePercent);

//     let afterFee = amt - fee;
//     let converted = Math.ceil(afterFee * fxRates[currency]);

//     // Create new transaction
//     const newTx = {
//       id: transactions.length + 1,
//       date: new Date().toISOString().split("T")[0],
//       amount: amt,
//       fee,
//       final: converted,
//       currency,
//     };

//     // Update transactions
//     setTransactions([newTx, ...transactions]);

//     // Clear input fields
//     setAmount("");
//     setCurrency("GBP");

//     // Show success message temporarily
//     setSuccess(true);
//     setTimeout(() => setSuccess(false), 2000);
//   };

//   // Transaction pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(transactions.length / itemsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard">
//         <h1>Welcome to Wiremite Dashboard</h1>

//         {/* Send Money */}
//         <section className="send-money card">
//           <h2>Send Money</h2>
//           <input
//             type="number"
//             placeholder="Enter amount in USD"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//             <option value="GBP">UK (GBP)</option>
//             <option value="ZAR">South Africa (ZAR)</option>
//           </select>
//           <button onClick={handleSend}>Send</button>
//           {error && <p className="error">{error}</p>}
//           {success && <p className="success">💸 Money sent successfully!</p>}
//         </section>

//         {/* Ads */}
//         <section className="ads card">
//           <h2>Advertisements</h2>
//           <div className="carousel">
//             <img
//               src={ads[currentAd].img}
//               alt={ads[currentAd].alt}
//               className="ad-img"
//             />
//             <div className="dots">
//               {ads.map((ad, index) => (
//                 <span
//                   key={ad.id}
//                   onClick={() => setCurrentAd(index)}
//                   className={index === currentAd ? "dot active" : "dot"}
//                 >
//                   ●
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Transactions */}
//         <section className="transactions card">
//           <h2>Transaction History</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Amount Sent (USD)</th>
//                 <th>Fee</th>
//                 <th>Final Amount</th>
//                 <th>Currency</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentTransactions.map((tx) => (
//                 <tr key={tx.id}>
//                   <td>{tx.date}</td>
//                   <td>${tx.amount}</td>
//                   <td>${tx.fee}</td>
//                   <td>
//                     {tx.final} {tx.currency}
//                   </td>
//                   <td>{tx.currency}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={currentPage === i + 1 ? "active" : ""}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Dashboard;







import React, { useState, useEffect } from "react";
import "../../Pages/Dashboard/Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Ad1 from "../../assets/Ad1.jpeg";
import Ad2 from "../../assets/Ad2.jpeg";
import Ad3 from "../../assets/Ad3.jpeg";

const initialTransactions = [
  { id: 1, date: "2025-08-01", amount: 200, fee: 20, final: 180, currency: "GBP" },
  { id: 2, date: "2025-08-02", amount: 100, fee: 20, final: 80, currency: "ZAR" },
  { id: 3, date: "2025-08-03", amount: 300, fee: 30, final: 270, currency: "GBP" },
  // ... more mock transactions
];

const ads = [
  { id: 1, img: Ad1, alt: "Ad 1", link: "#" },
  { id: 2, img: Ad2, alt: "Ad 2", link: "#" },
  { id: 3, img: Ad3, alt: "Ad 3", link: "#" },
];

const Dashboard = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("GBP");
  const [fxRates, setFxRates] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [currentAd, setCurrentAd] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCurrency, setFilterCurrency] = useState("All");
  const [searchDate, setSearchDate] = useState("");

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(
          "https://68976304250b078c2041c7fc.mockapi.io/api/wiremit/InterviewAPIS"
        );
        const data = await res.json();
        let rates = {};
        data.forEach(obj => {
          const [key, value] = Object.entries(obj)[0];
          rates[key] = value;
        });
        setFxRates(rates);
      } catch {
        setError("⚠️ Failed to fetch FX rates");
      }
    };
    fetchRates();

    const interval = setInterval(() => {
      setCurrentAd(prev => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = () => {
    setError("");
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return setError("Enter a valid amount > 0");
    if (amt < 10 || amt > 1000) return setError("Amount must be $10–$1000");
    if (!fxRates[currency]) return setError("FX rate not loaded yet");

    if (!window.confirm(`Send ${amt} USD to recipient in ${currency}?`)) return;

    let feePercent = currency === "GBP" ? 0.1 : 0.2;
    let fee = Math.ceil(amt * feePercent);
    let finalAmount = Math.ceil((amt - fee) * fxRates[currency]);

    const newTx = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0],
      amount: amt,
      fee,
      final: finalAmount,
      currency,
    };

    setTransactions([newTx, ...transactions]);
    setAmount("");
    setCurrency("GBP");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  // Filter & paginate
  const filteredTransactions = transactions.filter(tx =>
    (filterCurrency === "All" || tx.currency === filterCurrency) &&
    (searchDate === "" || tx.date === searchDate)
  );
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Summary cards
  const totalSent = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  const totalFees = transactions.reduce((acc, tx) => acc + tx.fee, 0);

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>Welcome to Wiremite Dashboard</h1>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card">💰 Total Sent: ${totalSent}</div>
          <div className="card">💸 Total Fees: ${totalFees}</div>
          <div className="card">📄 Total Transactions: {transactions.length}</div>
        </div>

        {/* Send Money */}
        <section className="send-money card">
          <h2>Send Money</h2>
          <input
            type="number"
            placeholder="Amount in USD"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option value="GBP">UK (GBP)</option>
            <option value="ZAR">South Africa (ZAR)</option>
            <option value="USD">US (USD)</option>
          </select>
          <button onClick={handleSend}>Send</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">💸 Money sent successfully!</p>}
        </section>

        {/* Ads Carousel */}
        <section className="ads card">
          <h2>Advertisements</h2>
          <a href={ads[currentAd].link} target="_blank" rel="noopener noreferrer">
            <img src={ads[currentAd].img} alt={ads[currentAd].alt} className="ad-img"/>
          </a>
          <div className="dots">
            {ads.map((ad, index) => (
              <span
                key={ad.id}
                className={index === currentAd ? "dot active" : "dot"}
                onClick={() => setCurrentAd(index)}
              >●</span>
            ))}
          </div>
        </section>

        {/* Transaction History */}
        <section className="transactions card">
          <h2>Transaction History</h2>

          <div className="filters">
            <select value={filterCurrency} onChange={e => setFilterCurrency(e.target.value)}>
              <option value="All">All Currencies</option>
              <option value="GBP">GBP</option>
              <option value="ZAR">ZAR</option>
              <option value="ZAR">USD</option>
            </select>
            <input
              type="date"
              value={searchDate}
              onChange={e => setSearchDate(e.target.value)}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount (USD)</th>
                <th>Fee</th>
                <th>Final Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map(tx => (
                <tr key={tx.id}>
                  <td>{tx.date}</td>
                  <td>${tx.amount}</td>
                  <td>${tx.fee}</td>
                  <td>{tx.final} {tx.currency}</td>
                  <td>{tx.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
