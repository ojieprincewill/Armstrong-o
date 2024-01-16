import "./App.css";
import PortfolioPage from "./pages/portfoliopage.component";
import WithPortSpinner from "./components/portfolio-spinner/with-port-spinner.component";

function App() {
  const Portfolio = WithPortSpinner(PortfolioPage);

  return (
    <>
      <Portfolio />
    </>
  );
}

export default App;
