import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Ninad
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Passionate Software Developer focused on building practical, scalable, and user-friendly digital solutions. I enjoy turning ideas into real-world applications using clean code and modern technologies.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        
        </div>

        <div className='mt-12 flex'>
          <div className="mt-12 flex flex-col gap-8">
            {experiences.map((item) => (
              <div key={item.title} className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-500">{item.company}</p>
                <span className="text-sm text-slate-400">{item.date}</span>
                <p className="text-slate-500">{item.points}</p>

              </div>
            ))}
          </div>

        </div>
      </div>

      <hr className='border-slate-200' />

      {/* <CTA /> */}
    </section>
  );
};

export default About;