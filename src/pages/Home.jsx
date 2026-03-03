import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import LiveScoreboard from "../components/home/LiveScoreboard";
import FormatRankings from "../components/home/FormatRankings";
import Fixtures from "../components/home/Fixtures";
import Squad from "../components/home/Squad";
import Leaderboards from "../components/home/Leaderboards";
import QuickStats from "../components/home/QuickStats";
import News from "../components/home/News";
import AppDownload from "../components/home/AppDownload";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveScoreboard />
      <FormatRankings />
      <Fixtures />
      <Squad />
      <Leaderboards />
      <QuickStats />
      <News />
      <AppDownload />
      <Footer />
    </>
  );
}
