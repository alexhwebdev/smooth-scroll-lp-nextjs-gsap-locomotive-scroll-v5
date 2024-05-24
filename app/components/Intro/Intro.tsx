'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function IntroComponent() {
  const background = useRef(null);
  const introImage = useRef(null);

  useGSAP( () => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
        // markers: true
      },
    })

    timeline
      .from(background.current, {clipPath: `inset(15%)`})
      .to(introImage.current, {height: "600px"}, 0) // 0 : to start together
  }, [])

  return (
    <div className={styles.intro}>

      <div 
        className={styles.backgroundImage} 
        ref={background}
      >
        <Image 
          src={'/images/background.jpeg'}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>

      <div className={styles.introContainer}>
        <div 
          className={styles.introImage}
          ref={introImage} 
          data-scroll 
          data-scroll-speed="0.3" 
        >
          <Image
            src={'/images/intro.png'}
            alt="intro image"
            fill={true} 
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          SMOOTH SCROLL
        </h1>
      </div>
    </div>
  )
}