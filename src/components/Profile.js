import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Profile = props => {
    const [name, setName] = useState('Danny Ken')
    const [email, setEmail] = useState('danny@ga.com')
    const [street, setStreet] = useState('11095 23nd Ave')
    const [city, setCity] = useState('Queens')
    const [state, setState] = useState('N.Y')
    const [zipcode, setZipcode] = useState(11425)
    const [username, setUsername] = useState('');

    useEffect(() => {
        //  use for API
        let url = 'https://api.github.com/users/DannyJaJr'
        axios.get(url)
            .then(response => {
                console.log(response.data)
                // console.log(props.other)
                //change the empty username to the response data from the API
                //the "login" is and string option provided from the API
                setUsername(response.data.login)
            })

    // }, []);
     });


    ///create a function addName : to update name to using setName
    const addName = () => {
        setName(props.other.name)
    }






    const updateName = e => {
        email.preventDefault();
        let newName = e.target.elements.name.value;
        setName(newName);


    }



    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <h2>{name}</h2>

            {/* to update the function addName */}
            <button onclick={addName}  >Add Other Name</button>


            <p>{email}</p>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>

            {/* to update the data */}
            <form onSubmit={updateName}   >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"></input>
                <button type="submit" >Change Name</button>
            </form>
            <h2>Your user name is: {username}</h2>
        </div>
    )
}



export default Profile;