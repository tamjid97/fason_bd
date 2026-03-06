import About from "@/app/components/shared/home/About";
import Baner from "@/app/components/shared/home/Baner";
import Contact from "@/app/components/shared/home/Contact";
import Newsletter from "@/app/components/shared/home/Newsletter";
import Products from "@/app/products/page";
import Review from "@/app/components/shared/home/Review";
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
