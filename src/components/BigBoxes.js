import React from 'react'
import PropTypes from 'prop-types'

import BigBox from '../components/BigBox'

const BigBoxes = ({boxes}) => {
  return (
    <div className="flex flex-wrap">
      {boxes && boxes.map((box, i) =>
        <BigBox box={box} key={i} />
      )}
    </div>
  )
}

// Content.propTypes = {
//   content: PropTypes.string,
//   className: PropTypes.string,
// }
//
// HTMLContent.propTypes = Content.propTypes

export default BigBoxes
