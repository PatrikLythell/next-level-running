import React from 'react'
import PropTypes from 'prop-types'

const BigBox = ({title, cta, link}) => {
  return (
    <a href={link} className="bg-nlr py-5 px-2 w-1/3 text-center mr-6 rounded-lg shadow-lg">
      <h4 className="text-2xl uppercase italic mb-3">{title || "Title"}</h4>
      <span className="underline">{cta || "CTA"}</span>
    </a>
  )
}

// Content.propTypes = {
//   content: PropTypes.string,
//   className: PropTypes.string,
// }
//
// HTMLContent.propTypes = Content.propTypes

export default BigBox
