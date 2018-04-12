import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => {
  // hack to bypass webpack error on production deploy
  const windowHack = typeof window !== 'undefined' && window
  const beta = windowHack ? (windowHack.location.pathname === '/beta/' || windowHack.location.pathname === '/beta') : false
  return (
    <div>
      <Helmet
        title="Pixels by Picasso"
        meta={[
          { name: 'description', content: 'Pixels by Picasso helps kids of all ages realize that painting is not magic and that it can be broken down into a science.' },
          { name: 'keywords', content: 'art, kids, painting, pixels, pixel art, paints, arts and crafts, crafts, birthday, christmas, picasso' },
        ]}
      />
      {beta ? '' : <Header />}
      <div style={{margin: '0 auto', maxWidth: 960, padding: '20px 1.75rem 1.45rem'}}>
        {children()}
      </div>
    </div>   
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
