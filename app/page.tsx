
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Appointment from "@/components/Appointment";
import Team from "@/components/Team";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <VideoSection />
      <Features />
      <Services />
      <Appointment />
      {/* <Team /> */}
      {/* <Testimonial /> */}
    </>
  );
}
