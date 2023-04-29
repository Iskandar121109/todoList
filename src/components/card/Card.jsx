import React, { useState } from 'react';
import classes from './Card.module.css';

export const Card = ({ user, handleDeleteUser, usersList, setUsersList }) => {
    const [edited, setEdited] = useState(false);
    const [userEdited, setUserEdited] = useState(user);
    const saveEdition = (id) => {
        const updatedUsersList = usersList.map(user => {
            if (user.id === id) {
                return userEdited;
            } else {
                return user;
            }
        });
        setUsersList(updatedUsersList);
    }
    return (
        !edited ?
            <div key={user.id} className={classes.card}>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <div className={classes.containerCard}>
                    <div className={classes.content}>
                        <p>{user.job}</p>
                        <p>{user.address.street}</p>
                        <p>{user.address.city}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                        <p>{user.company.name}</p>
                    </div>
                    <div className={classes.img}>
                        <img className={classes.imgUser} src='./user.png' alt="" />
                    </div>
                </div>
                <div className={classes.btns}>
                    <button className={classes.delete} onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    <button onClick={() => { setEdited(true) }} className={classes.edit} >Edit</button>
                </div>
            </div>
            :
            <div className={classes.inputs}>
                <input
                    type="text"
                    placeholder='name'
                    onChange={(e) => setUserEdited({ ...userEdited, name: e.target.value })}
                    value={userEdited.name}
                />
                <input
                    type="text"
                    placeholder='username'
                    onChange={(e) => setUserEdited({ ...userEdited, username: e.target.value })}
                    value={userEdited.username}
                />
                <input
                    type="text"
                    placeholder='job'
                    onChange={(e) => setUserEdited({ ...userEdited, job: e.target.value })}
                    value={userEdited.job}
                />
                <input
                    type="text"
                    placeholder='street'
                    onChange={(e) => setUserEdited({ ...userEdited, address: { ...userEdited.address, street: e.target.value } })}
                    value={userEdited.address.street}
                />
                <input
                    type="text"
                    placeholder='city'
                    onChange={(e) => setUserEdited({ ...userEdited, address: { ...userEdited.address, city: e.target.value } })}
                    value={userEdited.address.city}
                />
                <input
                    type="text"
                    placeholder='phone'
                    onChange={(e) => setUserEdited({ ...userEdited, phone: e.target.value })}
                    value={userEdited.phone}
                />
                <input
                    type="text"
                    placeholder='website'
                    onChange={(e) => setUserEdited({ ...userEdited, website: e.target.value })}
                    value={userEdited.website}
                />
                <input
                    type="text"
                    placeholder='CompanyName'
                    onChange={(e) => setUserEdited({ ...userEdited, company: { ...userEdited.company, name: e.target.value } })}
                    value={userEdited.company.name}
                />
                <button
                    onClick={() => { setEdited(false); saveEdition(user.id); }}>Save</button>
            </div>

    )
}
