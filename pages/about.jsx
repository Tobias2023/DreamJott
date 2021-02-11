import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>About us</h1>
      </div>
    </>
  );
}
