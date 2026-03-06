import About from "@/components/shared/home/About";
import Baner from "@/components/shared/home/Baner";
import Contact from "@/components/shared/home/Contact";
import Newsletter from "@/components/shared/home/Newsletter";
import Products from "@/components/shared/home/products/page";
import Review from "@/components/shared/home/Review";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section>
        <Baner />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
