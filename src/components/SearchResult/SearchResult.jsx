import React from 'react';
import style from './SearchResult.module.scss'
import PropTypes from "prop-types";
import ImagesContainer from "../ImagesContainer/ImagesContainer";

// fudongdong 2021/11/7
export default class SearchResult extends React.Component {
  static propTypes = {
    search: PropTypes.string.isRequired
  }

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.SearchResult}>
        搜素结果如下：xxx({this.props.search})
        <br/>
        <ImagesContainer search={this.props.search} />
      </div>
    );
  }
}
