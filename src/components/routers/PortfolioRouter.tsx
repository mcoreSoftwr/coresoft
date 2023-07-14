import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";

export const PortfolioRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />}>

      </Route>
    </Routes>
  );
};
