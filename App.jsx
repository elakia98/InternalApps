import FormComponent from './FormComponent'
import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import { data } from './Data'

//import Form from './Form'

function App() {
  const [streamContent, setStreamContent] = useState([])

  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    setStreamContent(data)
  }, [])

  return (
    <section className="jobs-center">
      <Navbar
        streamContent={streamContent}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      {/* <Form streamContent={streamContent} currentItem={currentItem} /> */}
      <FormComponent streamContent={streamContent} currentItem={currentItem} />
    </section>
  )
}

export default App
