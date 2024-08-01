import React, {useEffect} from 'react'

const Projects = () => {

    useEffect(() => {
        document.title = 'Project';
    }, []);

    function Routing() {
      return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/myProjects" element={<MyProjects />} />
            <Route path="/contactMe" element={<ContactMe />} />
            <Route path="/About_Me" element={<About_me />} />
          </Routes>
          <Footer />
        </div>
      );
    }
    
  return (
    <div>
      This is project page
      // search
      // map method
      // card
      // image
      // link
      //
    </div>
  )
}

export default Projects
