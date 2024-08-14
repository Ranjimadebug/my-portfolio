import React from 'react'
import './scrollup.css'

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = this.document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll');
    })
  return (
    <div>
      <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    </div>
  )
}

export default ScrollUp
