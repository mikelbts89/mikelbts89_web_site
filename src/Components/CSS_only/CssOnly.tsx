import React from 'react'
import "./CssOnly.css"

function CssOnly() {
  return (
    <div className='CssOnly' >
      <div className="scene">
        <div className="floor"></div>
        <div className="cube">
          <div className="front">
          </div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top">
            <div className="ballShadow"></div>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="ball_ring">
          <div className="ring"></div>
          <div className="ball"></div>
        </div>
      </div>
    </div>
  )
}

export default CssOnly