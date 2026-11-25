import React from 'react'
import { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";



const mainstyle = {
    width: '100%',
}

const liststyle = {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}
const listitemstyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
   
}
const del =
{
    color: 'blue',
    
}
const ListItems = () => {


    let [items, setItems] = useState([
    { id: 1, text: 'Item 1', checked: false },
    { id: 2, text: 'Item 2', checked: true },
    { id: 3, text: 'Item 3', checked: true },
    { id: 4, text: 'Item 4', checked: false },
])

let [inputval, setInputval] = useState("")


let handleChekBox = (id) => {




}

  return (
    <main style={mainstyle}>
        <div>
            <input type="text" value={inputval} onChange={(e) => setInputval(e.target.value)} />
            <button>add</button>

        </div>
        <ul style={liststyle}>
          {items.map((item) => (
            <li style={listitemstyle} key={item.id}>
              <input type="checkbox" checked={item.checked}  onChange={()=>{handleChekBox(item.id   )}}  />
              <label>{item.text}</label>
             <FaRegTrashAlt  style={del} tabIndex={[0]}
             onMouseOver={(e) => (e.currentTarget.style.color = 'red')}
             onMouseOut={(e) => (e.currentTarget.style.color = 'blue')}
             
             />
            </li>
          ))}
        </ul>
    </main>
  )
}

export default ListItems