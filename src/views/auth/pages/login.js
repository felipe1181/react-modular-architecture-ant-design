import React from 'react'
import { useFormik } from 'formik'
import Input from 'components/form/input'
import InputPassword from 'components/form/inputPassword'
import Button from 'components/form/button'
import Accounts from 'components/accounts'
import services from 'views/auth/services'
import { session } from 'api/helpers/storage/localStorage'
import { validationsLogin } from 'views/auth/validations'
import { Form, Row, Col } from 'antd'
import PropTypes from 'prop-types'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

function Login ({ history }) {
  const formik = useFormik({
    validationSchema: validationsLogin,
    onSubmit
  })

  async function onSubmit (payload) {
    const response = await services.login(payload, 'login')
    if (response) {
      session({
        token: response.data.token,
        sessionPayload: {
          name: response.data.user.name,
          email: response.data.user.email
        }
      })
      history.push('/dashboard')
    }
  }

  return (
    <Row>
      <Col style={{ marginTop: '40vh' }} span={6} offset={8}>
        <Accounts>
          <Form
            {...layout}
            name='basic'
            initialValues={{
              remember: false,
              email: '',
              password: ''
            }}
            onFinish={onSubmit}
          >
            <Form.Item
              help={formik.touched.email && Boolean(formik.errors.email)}
              validateStatus={formik.touched.email && formik.errors.email}
              label='Email'
              name='email'
            >
              <Input />
            </Form.Item>

            <Form.Item
              help={formik.touched.password && Boolean(formik.errors.password)}
              validateStatus={formik.touched.password && formik.errors.password}
              label='Senha'
              name='password'
            >
              <InputPassword />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit'>
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </Accounts>
      </Col>
    </Row>
  )
}
Login.propTypes = {
  history: PropTypes.any
}
export default Login
