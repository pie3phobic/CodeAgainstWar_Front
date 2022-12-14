import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import HeroCard from "../components/HeroCard";
import BigBlueButton from "../components/BigBlueButton";
import BigCard from "../components/BigCard";
import CodeWindow from "../components/CodeWindow";
import AboutBlock from "../components/AboutBlock";
import LearningBlock from "../components/LearningBlock";
import PartnersBlock from "../components/PartnersBlock";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef();
  return (
    <div className="">
      <Head>
        <title>CodeAgainstWar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header refAbout={aboutRef} />
      <main className="flex px-6">
        <HeroCard img="solider-1.webp" title="Help Ukraine" />
        <HeroCard img="solider-1.webp" title="Take Challenges" />
        <HeroCard img="solider-1.webp" title="Get Job Offers" />
      </main>
      <AboutBlock ref={aboutRef} />
      <LearningBlock />
      <PartnersBlock />
      <img src="sponsors-1.png" />
    </div>
  );
}
