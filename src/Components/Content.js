import React from "react"
import Image from "../icons/Image.png"
import {Typography} from "@material-ui/core"
import IntroductionSection from "./IntroductionSection"

function Content() {
  return (
    <div className='content-container'>
      <div className='hero-section-container'>
        <IntroductionSection />
        <div className='hero-section-item'>
          <img src={Image} alt="Image"/>
            <div>Changes</div>
        </div>
      </div>
    </div>
  )
}

export default Content
