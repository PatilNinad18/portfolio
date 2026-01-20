import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box neo-brutalism-blue py-4 px-8">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-btn flex items-center gap-2 mx-auto">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);


const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Ninad</span> 👋
            <br />
            A Web Developer....
        </h1>
    ),
    2 : (
        <InfoBox
            text="Worked with many companies and picked up many skills along the way"
            link="/about"
            btnText="Learn More"
        />
    ),
    3 : (
        <InfoBox
            text="Led multiple projects to success"
            link="/Projects"
            btnText="Learn More"
        />
    ),
    4 : (
        <InfoBox
            text="Ready to work for freelance work"
            link="/contact"
            btnText="Learn Talk"
        />
    ),
}


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
return (
    <div>HomeInfo</div>
  )
}

export default HomeInfo