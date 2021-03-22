import React from 'react';
 import PropTypes from 'prop-types'

import { Row, Col } from 'antd';
function Accounts({children}) {
  return(
    <Row>
        <Col span={24}>
            {children}
        </Col>
    </Row>  
    );
}
Accounts.propTypes = {
    children: PropTypes.any
} 
export default Accounts;