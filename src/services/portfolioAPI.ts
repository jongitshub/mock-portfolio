// src/services/portfolioAPI.ts

export type PortfolioItem = {
    id: string;
    symbol: string;
    shares: number;
    price: number;
  };
  
  export const getMockPortfolio = async (): Promise<PortfolioItem[]> => {
    // Simulating network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: "1", symbol: "AAPL", shares: 10, price: 165.25 },
          { id: "2", symbol: "TSLA", shares: 5, price: 210.00 },
          { id: "3", symbol: "GOOG", shares: 3, price: 2801.50 },
          { id: "4", symbol: "AMZN", shares: 2, price: 129.88 },
        ]);
      }, 800);
    });
  };
  