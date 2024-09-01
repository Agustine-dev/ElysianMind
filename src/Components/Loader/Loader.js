import React from "react"

export default function Loader () {
   

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: '#f5f5f5', // Light gray background
          }}>
            <h2>Loading chatbot...</h2>
          </div>
    )
};
  