import React from 'react';
import style from './BuildInSearch.module.scss'
import PropTypes from "prop-types";
import ImagesContainer from "../ImagesContainer/ImagesContainer";

// fudongdong 2021/11/7
export default class BuildInSearch extends React.Component {
  static propTypes = {
    search: PropTypes.string.isRequired
  }

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.BuildInSearch}>
        <p>搜素信息：{this.props.search}</p>
        <p>搜索结果：</p>
        <hr/>
        <ImagesContainer search={this.props.search} />
      </div>
    );
  }
}
