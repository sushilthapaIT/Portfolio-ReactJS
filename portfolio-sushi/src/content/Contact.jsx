import React, {useEffect} from 'react'

const Contact = () => {

  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <div>
      I am content
    </div>
  )
}

export default Contact
