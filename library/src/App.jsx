import styles from "./App.module.scss";
import { AboutCarousel } from "./components/aboutCarousel/aboutCarousel";
import { CoffeShop } from "./components/coffeShop/coffeShop";
import { DigitalLibraryCards } from "./components/digitalLibraryCards/digitalLibraryCards";
import { Favorites } from "./components/favorites/favorites";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { OurContacts } from "./components/ourContacts/ourContacts";
import { WelcomeBanner } from "./components/welcomeBanner/welcomeBanner";
import booksData from "./data/booksData.json";
function App() {
  return (
    <div className="App">
      <Header />
      <main style={styles.main}>
        <WelcomeBanner />
        <AboutCarousel />
        <Favorites data={booksData} />
        <CoffeShop />
        <OurContacts />
        <DigitalLibraryCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
