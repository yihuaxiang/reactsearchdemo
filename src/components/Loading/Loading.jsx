import React from 'react';
import style from './Loading.module.scss'

// fudongdong 2021/11/7
export default class Loading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      timer: null
    }
  }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      let time = this.state.time;
      time += 1;
      this.setState({
        time
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  static propTypes = {}

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.Loading}>
        <span>loading -- {this.state.time}</span>
      </div>
    );
  }
}
