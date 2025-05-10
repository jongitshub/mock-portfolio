// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getMockPortfolio, type PortfolioItem } from "../services/portfolioAPI";

const Home = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMockPortfolio().then(setPortfolio);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Portfolio</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <ul className="space-y-2">
        {portfolio.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <span>{item.symbol}</span>
            <span>{item.shares} shares @ ${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
