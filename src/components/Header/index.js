import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
// import axios from 'axios'
// import jsonp from 'jsonp'



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

    this.getWeatherAPIDate()

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
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className='weather-detail'>
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }


  getWeatherAPIDate() {
    let city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }

}