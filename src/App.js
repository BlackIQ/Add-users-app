import React, {useState} from "react";

import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {name: uName, age: uAge, id: Math.random().toString()},
            ];
        });
    };

    return (
        <React.Fragment>
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <AddUser onAddUser={addUserHandler}/>
                        <br />
                        <UsersList users={usersList}/>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="errormodal" tabIndex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
