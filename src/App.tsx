import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MakePurchasePage } from "./components/MakePurchasePage/MakePurchasePage";
import TransactionsPage from "./components/TransactionsPage/TransactionsPage";
import RepaymentsPage from "./components/RepaymentsPage/RepaymentsPage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MakePurchasePage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/repayments" element={<RepaymentsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
