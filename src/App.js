import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
         <div style={{position:'absolute'}}>
            <Link to="/">首页</Link><br/>
            <Link to="blog">博客</Link><br/>
            <Link to="about">关于</Link>
         </div>
         {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
