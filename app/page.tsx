import HomeSlider from "@/components/HomeSlider";
import HomePoster from "@/components/HomePoster";
import HomeNews from "@/components/HomeNews";
import TheFooter from "@/components/TheFooter";
import {TheHeader} from "@/components/TheHeader";
import {TheInfo} from "@/components/TheInfo";

export default function Home() {
  return (
    <section id={'home'}>
      <TheHeader/>
      <div className={'margin-nav'}></div>
      <HomeSlider/>
      <HomePoster />
      <HomeNews />
      <TheFooter />
      <TheInfo/>
    </section>
  )
}
