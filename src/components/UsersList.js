import React from "react";

const UsersList = (props) => {
    return (
        <div className='card border'>
            <div className='card-body'>
                {
                    props.users.length > 0 ? <div>
                        {props.users.map((user) => (
                            <div>
                                <span key={user.id}>
                                    {user.name}
                                    <span className='float-end text-primary'>{user.age} years old</span>
                                </span>
                                <br/>
                            </div>
                        ))}
                    </div> : <p>No user is added.</p>
                }
            </div>
        </div>
    );
};

export default UsersList;
