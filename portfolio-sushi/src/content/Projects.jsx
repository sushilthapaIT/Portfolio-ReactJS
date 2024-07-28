import React, {useEffect} from 'react'

const Projects = () => {

    useEffect(() => {
        document.title = 'Project';
    }, []);
    
  return (
    <div>
      This is project page
    </div>
  )
}

export default Projects
