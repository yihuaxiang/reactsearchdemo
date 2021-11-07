import React from 'react';
import axios from "axios";
import style from './ImagesContainer.module.scss'
import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";
import Loading from "../Loading/Loading";

// fudongdong 2021/11/7
export default class ImagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      images: null
    }
  }

  static propTypes = {
    search: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.queryData();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.search !== prevProps.search) {
      this.setState({
        loading: true,
        images: []
      })
      this.queryData();
    }
  }

  queryData() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${this.props.search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        console.info('response is ', response);
        const images = response.data.photos.photo;
        this.setState({
          images,
          loading: false
        })
      })
  }

  static defaultProps = {}

  render() {
    const {} = this.props;
    return (
      <div className={style.ImagesContainer}>
        <div>
          {this.props.search}
          <hr/>
          {this.state.loading ? <Loading /> : (
           <ul>
             <span>{this.state.images && this.state.images.length}</span>
             {this.state.images && this.state.images.map(img => {
               return <img key={img.id} src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`} />
             })}
           </ul>
          )}
        </div>
        <div>
          <NavLink to={"/"} >返回首页</NavLink>
        </div>
      </div>
    );
  }
}
