import React, { useEffect } from 'react'
import { data } from './Data'
import { useState } from 'react'
import Control from './Control'

//import { IoIosArrowDropdownCircle } from 'react-icons/fa'
const FormComponent = ({ streamContent, currentItem }) => {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setSelected(0)
  }, [])

  const toggle = (i) => {
    if (selected === i) return setSelected(null)
    setSelected(i)
  }

  const attributeData = data.map(({ attributes }) => {
    return attributes
  })

  const columnData = attributeData?.[currentItem]

  return (
    <div className="container">
      <div>
        {columnData.map((item, i) => {
          console.log(columnData)
          const attributes = columnData[i].columns
          return (
            <section className="question">
              <div className="title" onClick={() => toggle(i)}>
                <h4 className="hd-btn">{item.header}</h4>

                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                <form className="form">
                  {attributes.map((item) => {
                    return (
                      <div className="form-row" key={item.id}>
                        <Control item={item} key={item.id} />
                      </div>
                    )
                  })}
                </form>
              </div>
            </section>
          )
        })}
        {/* <h4>{streamContent[currentItem]?.attributes?.[0]?.header}</h4> */}
      </div>
    </div>
  )
}

export default FormComponent
