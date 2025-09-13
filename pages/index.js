import { Jaro } from "next/font/google";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Token from "@/components/Token";
import Buy from "@/components/Buy";
import Join from "@/components/Join";

const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main
      className={`${jaro.variable} font-jaro overflow-hidden max-w-[2100px] mx-auto`}
    >
      <Header />
      <Hero />
      <About />
      <Token />
      <Buy />
      <Join />
    </main>
  );
}
