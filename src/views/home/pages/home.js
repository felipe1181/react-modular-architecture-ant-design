import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/form/button'

function Home ({ title, history }) {
  function redirect () {
    history.push('/')
  }

  return (
    <>
      <h3>Home {title} </h3>
      <Button onClick={redirect} name='Início' />
    </>
  )
}
Home.propTypes = {
  history: PropTypes.any,
  title: PropTypes.string
}
export default Home
