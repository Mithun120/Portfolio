import React from 'react';

const styles = {
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#45a049'
  }
};

function Button1() {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const resumeDownloadLink = 'https://drive.google.com/file/d/1BE9zCVppcaqY6rGjIlL9MREdQLzomun7/view?usp=share_link';
  

  const handleDownload = () => {
    window.open(resumeDownloadLink, '_blank');
  };

  return (
    <button
      style={isHovering ? {...styles.button, ...styles.buttonHover} : styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      onClick={handleDownload}
    >
      Get Resume
    </button>
  );
}

export default Button1;
