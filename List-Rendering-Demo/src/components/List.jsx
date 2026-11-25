import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ListItems from './ListItems'

const listcom = {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '600px',
    width: '400px',
    backgroundColor: 'lightgray',
    margin: 'auto',


}

const stylebar = {
backgroundColor: 'blue',
padding: '10px',
boxShadow: '0 2px 4px gray',
width: '100%',
}


const List = () => {
  return (
    <div style={listcom}>
        
        <Header style={stylebar}/>

    <ListItems/>

        <Footer style={stylebar}/>
        </div>
  )
}

export default List