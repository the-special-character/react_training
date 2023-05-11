import React from 'react'
import { LocaleContext } from '../../context/localeContext'

function Home() {
  return (
    <div>
      <p>Home</p>
      <LocaleContext.Consumer>
        {({ locale, toggleLocale }) => {
          console.log('render locale consumer')
          return (
            <div>
              <p>{`Current Locale: ${locale}`}</p>
              <button type="button" onClick={toggleLocale}>
                Change Locale
              </button>
            </div>
          )
        }}
      </LocaleContext.Consumer>
    </div>
  )
}

export default Home
