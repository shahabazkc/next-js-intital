import React from 'react'
import Head from 'next/head';
import styles from '../styles/abc.module.css';
import type from './stylecode.module.css'
const Contact = () => {
    return (
        <div className={type.content}>
            <Head>
                <title>Contact page</title>
                <meta name="keywords" content="web development, programming"></meta>
            </Head>
            <h1 className={type.h1}>Contact page</h1>
        </div>
    )
}

export default Contact
