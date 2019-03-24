import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'


export default class Admin extends React.Component {
  static defaultProps = {
    userName: '河畔一角'
  };

  constructor(props) {
    super(props)

    let { userName } = this.props
    this.state = {
      userName,
      sysTime: null

    }
  }

  componentDidMount() {
    setInterval(() => {
      // getTime是个一时间戳
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000);
  }

  render() {

    return (
      <div className="header">
        <Row className="header-top">
          <Col>
            <span>欢迎，{this.state.userName}</span>
            <a href=':;'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col className='breadcrumb-title' span={4}>
            首页
          </Col>
          <Col className="weather" span={20}>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}