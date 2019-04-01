import React from 'react'
import ReactDOM from 'react-dom'


var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

const title = React.createElement(
   'h1',
   {id: 'title', className: 'header', style: style},
   'React App is Awesome'

)

ReactDOM.render(
  title,
  document.getElementById('root')
)