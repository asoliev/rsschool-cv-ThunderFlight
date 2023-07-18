import { AboutCarousel } from "./components/aboutCarousel/aboutCarousel";
import { Favorites } from "./components/favorites/favorites";
import { Header } from "./components/header/header";
import { WelcomeBanner } from "./components/welcomeBanner/welcomeBanner";
import booksData from "./data/booksData.json";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeBanner />
        <AboutCarousel />
        <Favorites data={booksData} />
      </main>
    </div>
  );
}

export default App;
