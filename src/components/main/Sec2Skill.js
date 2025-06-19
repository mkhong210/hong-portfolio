import React, { useEffect, useState } from 'react';
import '../../style/common.scss';
import skillsData from '../../data/skilldata.json';

function Sec2Skill() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {skillsData.map((section, idx) => (
        <div
          key={section.id}
          className={`skill skill0${idx + 1} ${
            activeIndex === idx ? 'active' : ''
          }`}
          onClick={() => setActiveIndex(idx)}
        >
          <div className='skill_title'>
            <p>{section.title}</p>
            <p>{section.number}</p>
          </div>
          <div className='skill_desc'>
            <ul>
              {section.skills.map((skill) => (
                <li key={skill.name} className='skill_item'>
                  <p style={{ '--skill-color': skill.color }}>{skill.name}</p>
                  <p>{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default Sec2Skill;
