import React from 'react'

const TextAndList = ({list: {title, price, body}, ashtml}) => {
  return (
    <div>
      <div className="flex items-end justify-between mb-3 md:w-2/3">
        <h3 className="text-3xl md:text-5xl mr-3 italic font-extrabold uppercase leading-none">{title}</h3>
        <span className="text-2xl whitespace-no-wrap">{price}</span>
      </div>
      <div className="md:flex mb-16">
        <div className="md:w-2/3 md:mr-16">
          {body &&
            <div className="leading-tight" dangerouslySetInnerHTML={{ __html: ashtml.body }} />
          }
        </div>
        <div className="h-64 md:h-auto flex-1 bg-nlr">

        </div>
      </div>
    </div>
  )
}

export default TextAndList
