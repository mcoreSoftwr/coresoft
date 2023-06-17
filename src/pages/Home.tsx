import { Footer } from "../components/home/Footer";
import { Navbar } from "../components/home/Navbar";

export const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <main className="flex-grow">
        </main>
        <Footer />
      </div>
    </>
  );
};