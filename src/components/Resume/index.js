import React from 'react';
import LanguageTools from '../LanguageTools';

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="title-2">Resume.</h2>
      <div className="history-container">
        <div className="history">
          <h4 className="title-4">Work History</h4>
          <div className="work-history">
            <p>1 <span className="sp-ml1"></span><span className="sp-purple">{`const`}</span> <span className="sp-orange">{`experienceDetails`}</span> <span className="sp-teal">{` = `}</span> <span className="sp-purple">{`[`}</span></p>
            <p>2 <span className="sp-purple sp-ml2">{`{`}</span></p>
            <p>3 <span className="sp-ml3"> <span className="sp-red">{`title`}</span> : <span className="sp-green">{`"Visitor Expreience Associate"`}</span>,</span></p>
            <p>4 <span className="sp-ml3"> <span className="sp-red">{`company`}</span> : <span className="sp-green">{`"Franklin Park Conservatory"`}</span>,</span></p>
            <p>5 <span className="sp-ml3"> <span className="sp-red">{`yearsExperience`}</span> : <span className="sp-orange">1</span>,</span></p>
            <p>6 <span className="sp-ml3"> <span className="sp-red">{`location`}</span> : <span className="sp-green">{`"Columbus"`}</span>,</span></p>
            <p>7 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
            <p>8 <span className="sp-purple sp-ml2">{`{`}</span></p>
            <p>9 <span className="sp-ml3"> <span className="sp-red">{`title`}</span> : <span className="sp-green">{`"Facilities Scheduling Coordinator"`}</span>,</span></p>
            <p>10 <span className="sp-ml4"> <span className="sp-red">{`company`}</span> : <span className="sp-green">{`"Dwell Community Church"`}</span>,</span></p>
            <p>11 <span className="sp-ml4"> <span className="sp-red">{`yearsExperience`}</span> : <span className="sp-orange">2</span>,</span></p>
            <p>12 <span className="sp-ml4"> <span className="sp-red">{`location`}</span> : <span className="sp-green">{`"Columbus"`}</span>,</span></p>
            <p>13 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
            <p>14 <span className="sp-purple sp-ml1">{`]`}</span></p>
          </div>
        </div>
        <div className="history">
        <h4 className="title-4">Education History</h4>
          <div className="work-history">
          <p>1 <span className="sp-ml1"></span><span className="sp-purple">{`const`}</span> <span className="sp-orange">{`educationDetails`}</span> <span className="sp-teal">{` = `}</span> <span className="sp-purple">{`[`}</span></p>
          <p>2 <span className="sp-purple sp-ml2">{`{`}</span></p>
          <p>3 <span className="sp-ml3"> <span className="sp-red">{`program`}</span> : <span className="sp-green">{`"Coding Boot Camp"`}</span>,</span></p>
          <p>4 <span className="sp-ml3"> <span className="sp-red">{`field`}</span> : <span className="sp-green">{`"Full-Stack Development"`}</span>,</span></p>
          <p>5 <span className="sp-ml3"> <span className="sp-red">{`yearCompleted`}</span> : <span className="sp-orange">2022</span>,</span></p>
          <p>6 <span className="sp-ml3"> <span className="sp-red">{`school`}</span> : <span className="sp-green">{`"The Ohio State University"`}</span>,</span></p>
          <p>7 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
          <p>8 <span className="sp-purple sp-ml2">{`{`}</span></p>
          <p>9 <span className="sp-ml3"> <span className="sp-red">{`program`}</span> : <span className="sp-green">{`"Classics"`}</span>,</span></p>
          <p>10 <span className="sp-ml4"> <span className="sp-red">{`field`}</span> : <span className="sp-green">{`"Ancient History and Religion"`}</span>,</span></p>
          <p>11 <span className="sp-ml4"> <span className="sp-red">{`yearCompleted`}</span> : <span className="sp-orange">2021</span>,</span></p>
          <p>12 <span className="sp-ml4"> <span className="sp-red">{`school`}</span> : <span className="sp-green">{`"The Ohio State University"`}</span>,</span></p>
          <p>13 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
          <p>14 <span className="sp-purple sp-ml1">{`]`}</span></p>
          </div>
        </div>
      </div>

      <LanguageTools />
      <div className="resume-download">
        <h3 className="title-3">Download My Resume.</h3>
        <p>If you would like to know more,  download my resume!</p>
        <a className="downloadButton" href='https://drive.google.com/file/d/1Q7GFZmRId8z_83jE_V0rh_unw1v2V64e/view?usp=sharing'>Download PDF</a>
      </div>
    </section>
  )
}

export default Resume;