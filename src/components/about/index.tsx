import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import AnimatedText from '../animatedText'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true
      }
    })

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    })
  })

  return (
    <main id="about" className="min-h-screen w-screen">
      <section className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Welcome to Zentry</h2>

        <AnimatedText title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" containerClass="mt-5 !text-black text-center"/>

        <p className="about-subtext">
          <span>The Game of Games begins-your life, now an epic MMORPG</span>
          <span>Zentry unites every player from countless games and platforms</span>
        </p>
      </section>
      <section id="clip" className="h-dvh w-screen">
        <figure className="mask-clip-path about-image">
          <img src="/img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
        </figure>
      </section>
    </main>
  )
}

export default About