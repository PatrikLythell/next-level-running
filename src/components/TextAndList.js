import React from 'react'

const TextAndList = ({list: {title, price, body, usps, cta}, ashtml}) => {
  return (
    <div className="my-6 sm:w-2/3 pt-4">
      <div className="flex items-baseline mb-3">
        <h3 className="text-3xl sm:text-5xl mr-3 italic font-extrabold uppercase leading-none">{title}</h3>
        <span className="text-2xl">{price}</span>
      </div>
      {body &&
        <div className="leading-tight" dangerouslySetInnerHTML={{ __html: ashtml.body }} />
      }
      {usps &&
        <ul>
          {usps.map((listItem, i) =>
            <li key={i} className="mb-2"><strong>{listItem.title}</strong> - {listItem.body}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default TextAndList
