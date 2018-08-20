import React from 'react'

const TextAndList = ({list: {title, price, body, usps, cta}}) => {
  return (
    <div>
      <div className="flex items-baseline mb-2">
        <h3 className="text-5xl mr-3">{title || "Title"}</h3>
        <span className="text-2xl">{price || "price/mån"}</span>
      </div>
      <p className="mb-3">{body || "body"}</p>
      {usps &&
        <ul>
          {usps.map((listItem, i) =>
            <li key={i} className="mb-2"><strong>{listItem.title || "title"}</strong> -   {listItem.body || "body"}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default TextAndList
