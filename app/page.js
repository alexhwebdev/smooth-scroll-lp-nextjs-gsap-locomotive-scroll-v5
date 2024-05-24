'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from './components/Intro/Intro';
import Description from './components/Description/Description';
import Projects from './components/Projects/Projects';


export default function Home() {
  useEffect(() => {
    ( async () => {
        const LocomotiveScroll = (await import(
          'locomotive-scroll'
        )).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  // useEffect(() => {
  //   // Define an async function inside useEffect to handle dynamic import
  //   const initializeLocomotiveScroll = async () => {
  //     try {
  //       // Dynamically import the module
  //       const { default: LocomotiveScroll } = await import('locomotive-scroll');
  //       // Once imported, initialize LocomotiveScroll
  //       const locomotiveScroll = new LocomotiveScroll();
  //     } catch (error) {
  //       console.error('Error initializing Locomotive Scroll:', error);
  //     }
  //   };

  //   // Call the async function immediately
  //   initializeLocomotiveScroll();

  //   // Since we only want to initialize once, pass an empty dependency array
  // }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Description />
      <Projects />
    </main>
  );
}


/* NOTES

*/