import React from 'react'
import './index.less'
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    const menuTreeNode = this.renderMenu(MenuConfig);

    this.state = {
      menuTreeNode
    }
  }


  render() {

    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Test</h1>
        </div>
        {/* 菜单 */}
        <Menu>
          {this.state.menuTreeNode}
        </Menu>,
          </div>
    )
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        {item.title}
      </Menu.Item>
    })
  }
}

