import React from "react";

const UsersList = (props) => {
    return (
        <div className='card border'>
            <div className='card-body'>
                {
                    props.users.length > 0 ? <ul>
                        {props.users.map((user) => (
                            <li key={user.id}>
                                {user.name} ({user.age} years old)
                            </li>
                        ))}
                    </ul> : <p>No user is added.</p>
                }
            </div>
        </div>
    );
};

export default UsersList;
