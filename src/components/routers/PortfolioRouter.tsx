import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";

export const PortfolioRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>

      </Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
