import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
      let styles={
          root:{
              width:'100vw',
              height:'100vh',
              background:'url("http://pic.qiantucdn.com/58pic/18/25/11/44F58PICJXC_1024.jpg") no-repeat  fixed center center/cover'
          },
          h1:{
              color:'#fff',
          }

      }
    return(
      <div style={styles.root}>
        <h1 style={styles.h1}>欢迎光临</h1>
      </div>
    )
  }
}

export default Home;
