import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name:&nbsp;&nbsp;{contact.name}</h5>
                        <h5 className="card-text">Id:&nbsp;&nbsp;{contact.id}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">Email:&nbsp;&nbsp;{contact.email}</h5>
                      <h5>  <p className="card-text">Company.catchPhrase:&nbsp;&nbsp;{contact.company.catchPhrase}</p></h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts
