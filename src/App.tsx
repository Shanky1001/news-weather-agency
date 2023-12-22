import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { NewsWithInfiniteScroll } from "./components/news/News";
import ReduxProvider from "./providers/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <div className="w-full max-w-screen-2xl m-auto px-3">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <NewsWithInfiniteScroll />
        </main>
      </div>
    </ReduxProvider>
  );
}

export default App;
