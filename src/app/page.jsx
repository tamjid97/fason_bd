import About from "@/components/shared/home/About";
import Baner from "@/components/shared/home/Baner";
import Contact from "@/components/shared/home/Contact";
import Products from "@/components/shared/home/Products";
import Review from "@/components/shared/home/Review";
import Image from "next/image";

export default function Home() {
  return <div>
    <section>
      <Baner/>
    </section>
    <section>
      <Products/>
    </section>
    <section>
      <About/>
    </section>
    <section>
      <Review/>
    </section>
    <section>
      <Contact/>
    </section>
  </div>
  ;
}
