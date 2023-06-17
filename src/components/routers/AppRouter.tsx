import { Routes, Route } from "react-router-dom";
import { PortfolioRouter } from "./PortfolioRouter";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<PortfolioRouter />} />
    </Routes>
  );
};
