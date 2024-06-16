import React from 'react'

interface ImageProps {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div style={styles.container}>
      <img src={src} alt={alt} style={styles.image} />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
  } as React.CSSProperties,
  image: {
    display: 'block',
    maxWidth: '100%',
    height: '25%',
  } as React.CSSProperties,
}

export default Image
