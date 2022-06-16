import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import styles from '../../styles/Home.module.css';

import { WorkoutList } from '../../components/WorkoutList/WorkoutList';
import { StyledPageSelection } from '../exercises/styles';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';

export default function Workout() {

  const [open, setOpen] = useState(false);
  const node = useRef();
  
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className={styles.container}>
      <Head>
        <title>Swole Not Swollen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <div ref={node}>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
      </div>

        <h2 className={styles.title}>
          Welcome to Swole Not Swollen, an app to organize your circus maintenance pursuits!
        </h2>

      <div className='pageDropdown'>
        <StyledPageSelection pageName="Workout Plans"/>
      </div> 

      <div>
        <WorkoutList/>
      </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> and a lot of tea
          </span>
        </a>
      </footer>
    </div>
  )
}