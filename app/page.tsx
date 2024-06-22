import CtaSec from "@/components/main/CtaSec";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Gallery from "@/components/main/Gallery"


export default function Home() {
  return (
   <main className=" h-full w-full">
    <div className=" flex flex-col gap-10 ">
      <Hero/>
      <Skills/>
      <Projects/>
      <Gallery/>
      {/* <Encryption/> */}
     
    <CtaSec/>


    <div>
      
    </div>
    </div>
    
   </main>
  );
}
