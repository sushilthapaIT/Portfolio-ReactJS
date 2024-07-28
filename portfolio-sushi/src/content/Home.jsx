import React, {useEffect} from 'react'

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, []);
  
  return (
    <div>
      i am home
    </div>
  )
}

export default Home
