"use client";
import gsap, { Elastic } from "gsap";
import { tektur } from "../app/fonts";
import React, { useLayoutEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const hero: any = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t2 = gsap.timeline({ delay: 0.4 });
      t2.to(".hero", { opacity: 100 }).from(".typewriter", {
        x: 1200,
        opacity: 0,
        ease: Elastic.easeOut,
        duration: 1.4,
      });
    }, hero);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={hero}
      className={`${tektur.className} w-full h-screen bg-[#0F141D]`}
    >
      <div className="hero opacity-0">
        {/* typewriter Animation */}
        <h1 className="text-[#BEC6D2] w-2/5 mx-auto pt-28 text-3xl font-medium tracking-widest typewriter">
          <TypeAnimation
            sequence={[
              "Technojam🚀👨‍💻",
              1200,
              "Throttle To Learn",
              1200,
              "<Code/> To Win",
              1200,
            ]}
            wrapper="span"
            speed={20}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <div className="w-1/3 mx-auto mt-16 border border-gray-700 rounded">
          <div className="container_terminal"></div>
          <div className="terminal_toolbar">
            <div className="flex items-center">
              <button className="btn btn-color"></button>
              <button className="btn"></button>
              <button className="btn"></button>
            </div>
            <p className="user">VedanshTripathi@Technojam: ~</p>
          </div>
          <div className="terminal_body">
            <div className="terminal_promt">
              <span className="terminal_user">VedanshTripathi@Technojam:</span>
              <span className="terminal_location">~</span>
              <span className="terminal_bling">$</span>
              <TypeAnimation
                className="text-white"
                sequence={["./kickStart.sh"]}
                wrapper="span"
                cursor={false}
                speed={20}
                style={{ fontSize: "12px", display: "inline-block" }}
              />
            </div>
            <div className="terminal_promt">
              <span className="terminal_user">VedanshTripathi@Technojam:</span>
              <span className="terminal_location">~</span>
              <span className="terminal_bling">$</span>
              <span className="text-white">Hello guys🔈!! let&apos;s start contributing 🚀👉🏻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
