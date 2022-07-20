import React, { useState } from "react";
import Modal from "../Modal";


const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [projects] = useState([
    {
      name: 'WorkdayScheduler',
      description: 'Manage your workday by keeping track of your meetings and other events in an easy to read hourly format.',
      github: 'https://github.com/katensullivan55/workday-scheduler',
      deployed: 'https://katensullivan55.github.io/Workday-Scheduler/',
      pic: 'Workday-Scheduler'
    },
    {
      name: 'RobotGladiators',
      description: 'Battle your robot against the best of the best to see if you have got what it takes!',
      github: 'https://github.com/katensullivan55/robot-gladiators',
      deployed: 'https://katensullivan55.github.io/robot-gladiators/',
      pic: 'Robot-Gladiators'
    },
    {
      name: 'Taskinator',
      description: 'Keep track of your tasks in a kanban board format.',
      github: 'https://github.com/katensullivan55/taskinator',
      deployed: 'https://katensullivan55.github.io/taskinator/',
      pic: 'Taskinator'
    },
    {
      name: 'RunBuddy',
      description: 'The front end HTML and CSS to a to an athletic trainer site.',
      github: 'https://github.com/katensullivan55/run-buddy',
      deployed: 'https://katensullivan55.github.io/run-buddy/',
      pic: 'run-buddy'
    },
    {
      name: 'TaskmasterPro',
      description: 'A kanban board where you can save your tasks with a due date.',
      github: 'https://github.com/katensullivan55/taskmaster-pro',
      deployed: 'https://katensullivan55.github.io/taskmaster-pro/',
      pic: 'Taskmaster-pro'
    },
    {
      name: 'TeamProfileGenerator',
      description: 'Organize your employees by using the command line. (Project Repo and deployed site are the same.)',
      github: 'https://github.com/katensullivan55/Team-Profile-Generator',
      deployed: 'https://github.com/katensullivan55/Team-Profile-Generator',
      pic: 'Team-Profile-Generator'
    },
    {
      name: 'RegexTutorial',
      description: 'A walkthorugh of how regex can be used to validate an email. (Project Repo and deployed site are the same.)',
      github: 'https://gist.github.com/katensullivan55/f9d9608ebc9886abf39643c4be56f80b',
      deployed: 'https://gist.github.com/katensullivan55/f9d9608ebc9886abf39643c4be56f80b',
      pic: 'Regex-Tutorial'
    }
  ])

  const [currentProject, setCurrentProject] = useState();
  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
    {isModalOpen && (
    <Modal currentProject={currentProject} onClose={toggleModal} />
    )}
    <div className="flex-row">
      {projects.map((image, i) => (
        <img id={image.name} className='img-thumbnail' src={require(`../../assets/images/projects/${image.pic}.png`)}
        alt={image.name}
        onClick={() => toggleModal(image, i)}
        key={image.name}
      />
      ))}
    </div>
  </div>
  )
}

export default ProjectList;