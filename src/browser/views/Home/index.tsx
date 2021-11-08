import React, { useEffect, useState } from 'react';
import Layout from 'antd/lib/layout/layout';
import { Banner } from 'browser/components/banner';
import { Footer } from 'browser/components/Footer';
import { Content } from 'browser/components/Content';

import styles from './index.module.css';

interface PageData {
  sections?: {
    title: string;
    videoSrc: string;
    poster?: string;
  }[];
}

export function Home() {
  return (
    <Layout className={styles.homeContainer}>
      <Banner />
      <Content />
      <Footer />
    </Layout>
  );
}
