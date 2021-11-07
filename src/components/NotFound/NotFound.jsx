import React from 'react';
import style from './NotFound.module.scss'

// fudongdong 2021/11/7
export default class NotFound extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.NotFound}>
        Page is not found!
      </div>
    );
  }
}
