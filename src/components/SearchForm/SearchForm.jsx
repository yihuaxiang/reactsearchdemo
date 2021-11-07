import React from 'react';
import style from './SearchForm.module.scss'

// fudongdong 2021/11/7
export default class SearchForm extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  handleSubmit= (e) => {
    e.preventDefault();
    console.info('handleSubmit', e);
    const form = e.target;
    const textValueInput = form.querySelector('input[type=text]');
    const value = textValueInput.value;
    console.info('value is ', value);

    // eslint-disable-next-line no-restricted-globals
    location.assign(`/#/search/${value}`)
  }

  render() {
    const {} = this.props;
    return (
      <div className={style.SearchForm}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
