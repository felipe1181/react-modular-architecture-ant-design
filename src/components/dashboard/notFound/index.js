import React from 'react';
import { Result, Button } from 'antd';
import PropTypes from 'prop-types'

function NotFound({ history }){
const sendLogin = () => { history.push('/') }

  return (
    <Result
    title="Página não encontrada"
    extra={
      <Button onClick={() => sendLogin()} type="primary" key="sendLogin">
        Voltar
      </Button>
    }
  />
  );
}
NotFound.propTypes = {
  history: PropTypes.any
}
export default NotFound;