import HomeSlider from "@/components/HomeSlider";
import HomePoster from "@/components/HomePoster";
import HomeNews from "@/components/HomeNews";
import TheFooter from "@/components/TheFooter";

export default function Home() {
  return (
    <section id={'home'}>
      <div className={'margin-nav'}></div>
      <HomeSlider/>
      <HomePoster />
      <HomeNews />
      <TheFooter />
      <TheInfo/>
    </section>
  )
}
