import React from 'react';
import style from './HomeInfo.module.scss'
import { NavLink} from 'react-router-dom'

// fudongdong 2021/11/7
export default class HomeInfo extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.HomeInfo}>
        <p>Home info</p>
        <NavLink to={"/bird"}>bird</NavLink>
        <NavLink to={"/food"}>food</NavLink>
        <hr/>
        <NavLink to={"/search"}>搜索</NavLink>
      </div>
    );
  }
}
