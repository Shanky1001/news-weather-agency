import Navbar from "./components/navbar/Navbar";
import ReduxProvider from "./providers/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <div className="w-full max-w-screen-2xl m-auto px-3">
        <header>
          <Navbar />
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
