import React, {useEffect} from 'react'

const About = () => {

  useEffect(() => {
    document.title = 'About';
  }, []);
    
  return (
    <div>
      i am about section
    </div>
  )
}

export default About
