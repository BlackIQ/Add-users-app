import React, {useState} from 'react';

const AddUser = (props) => {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();
        props.onAddUser(name, age);

        setName('');
        setAge('');
    };

    return (
        <div className='card border'>
            <div className='card-body'>
                <form onSubmit={addUserHandler}>
                    <label className='form-label' htmlFor="username">Username</label>
                    <input id="username" className='form-control' type="text" onChange={(e) => setName(e.target.value)}/>
                    <br/>
                    <label className='form-label' htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" minLength='5' className='form-control' onChange={(e) => setAge(e.target.value)}/>
                    <br/>
                    {
                        name == null & age == null ? <button className='btn btn-primary' type='button' data-mdb-toggle="modal" data-mdb-target="#errormodal">Add</button> : <button className='btn btn-primary' type='submit'>Add</button>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddUser;