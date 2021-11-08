import { Footer as AntFooter } from 'antd/lib/layout/layout';
import React from 'react';

import styles from './index.module.css';

export const Footer = () => {
  return (
    <AntFooter
      className={styles.footerContainer}
      style={{
        paddingTop: '60rpx',
      }}>
      <div className='home-layout'>
        <p key='cop' className='copy'>
          Copyright ©2021 苏轼
        </p>
      </div>
    </AntFooter>
  );
};
