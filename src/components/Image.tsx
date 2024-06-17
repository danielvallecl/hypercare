import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Image.module.css';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  if (!src) {
    return (
      <CircularProgress role="progressbar" />
    );
  }

  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={`${styles.image} ${className}`} />
    </div>
  );
};

export default Image;