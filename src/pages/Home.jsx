import HeroSlider from "../components/HeroSlider";
import Kategoriya from "../components/Kategoriya";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <section className="py-14">
      <HeroSlider />
      <Search />
      <Kategoriya />
    </section>
  );
};
export default HomePage;
