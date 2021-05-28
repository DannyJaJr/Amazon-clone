import React, { useState, useEffect } from 'react';





const WishList = props => {
    const [list, setList] = useState([]);



    let itemList = list.map((item, idx) => {
        return <li key={idx}>{item}</li>
    })
}


return (
    <div>
        <h1>Wish List</h1>
        <button onClick={addItem} >Add Items</button>

        <ul>
            {itemList}
        </ul>


    </div>
)


