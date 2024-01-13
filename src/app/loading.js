import React from 'react';

const Loading = () => {
  const loaderStyle = {
    border: '16px solid #F3F3F3',
    borderTop: '16px solid #B90E0A',
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
  };

  const pageStyle = {
    width: "100vw",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={pageStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={loaderStyle} className="loader"></div>
    </div>
  );
};

export default Loading;
