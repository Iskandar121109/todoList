import React, { useEffect, useState } from 'react'
import classes from './ListCards.module.css';
import { Card } from '../card/Card';

export const ListCards = () => {
    // Массив users 
    const [usersDefault, setUsersDefault] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "job": "front-end developer",
            "src": "./user.png",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "job": "front-end developer",
            "src": "./user.png",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "job": "front-end developer",
            "src": "./user.png",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "job": "back-end developer",
            "src": "./user.png",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "job": "back-end developer",
            "src": "./user.png",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "job": "back-end developer",
            "src": "./user.png",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "job": "full-stack developer",
            "src": "./user.png",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "job": "full-stack developer",
            "src": "./user.png",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "job": "full-stack developer",
            "src": "./user.png",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "job": "full-stack developer",
            "src": "./user.png",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]);
    // Добавляю массив users в localStorage
    localStorage.setItem('usersDefault', JSON.stringify(usersDefault));
    // Получаю массив с localStorage
    const usersFilter = JSON.parse(localStorage.getItem('usersDefault'));
    const users = JSON.parse(localStorage.getItem('users'));

    const [usersList, setUsersList] = useState(users);
    const handleDeleteUser = (id) => {
        setUsersList(usersList.filter(user => user.id !== id));
    }

    const handleReset = () => {
        setUsersList(usersDefault);
    }
    const onFilterUser = (job) => {
        setUsersList(usersFilter.filter(user => user.job === job));
    }
    const onSortedUser = () => {
        setUsersList([...usersList].sort((a, b) => a.name > b.name ? 1 : -1));
    }
    const onSortedUserZA = () => {
        setUsersList([...usersList].sort((a, b) => a.name > b.name ? -1 : 1));
    }
    const defaultUser = {
        id: Date.now(),
        name: "",
        username: "",
        email: "Sincere@april.biz",
        job: "",
        src: "./user.png",
        address: {
            street: "",
            suite: "Apt. 556",
            city: "",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        name: "",
        username: "",
        email: "Sincere@april.biz",
        job: "",
        src: "./user.png",
        address: {
            street: "",
            suite: "Apt. 556",
            city: "",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    });
    const addNewUser = () => {
        setUsersList([...usersList, newUser]);
        setNewUser(defaultUser);
    }
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usersList));
    }, [usersList]);
    return (
        <div>
            <div className={classes.btns}>
                <button onClick={() => onFilterUser('front-end developer')}>front-end developer</button>
                <button onClick={() => onFilterUser('back-end developer')}>back-end developer</button>
                <button onClick={() => onFilterUser('full-stack developer')}>full-stack developer</button>
                <button onClick={onSortedUser}>Sort A-Z</button>
                <button onClick={onSortedUserZA}>Sort Z-A</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className={classes.inputs}>
                <input
                    type="text"
                    placeholder='name'
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    value={newUser.name}
                />
                <input
                    type="text"
                    placeholder='username'
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    value={newUser.username}
                />
                <input
                    type="text"
                    placeholder='job'
                    onChange={(e) => setNewUser({ ...newUser, job: e.target.value })}
                    value={newUser.job}
                />
                <input
                    type="text"
                    placeholder='street'
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, street: e.target.value } })}
                    value={newUser.address.street}
                />
                <input
                    type="text"
                    placeholder='city'
                    onChange={(e) => setNewUser({ ...newUser, address: { ...newUser.address, city: e.target.value } })}
                    value={newUser.address.city}
                />
                <input
                    type="text"
                    placeholder='phone'
                    onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
                    value={newUser.phone}
                />
                <input
                    type="text"
                    placeholder='website'
                    onChange={(e) => setNewUser({ ...newUser, website: e.target.value })}
                    value={newUser.website}
                />
                <input
                    type="text"
                    placeholder='CompanyName'
                    onChange={(e) => setNewUser({ ...newUser, company: { ...usersList.company, name: e.target.value } })}
                    value={newUser.company.name}
                />
                <button onClick={addNewUser}>Add</button>
            </div>
            <div className={classes.listCards}>
                {usersList.map(user => (
                    <Card
                        user={user}
                        key={user.id}
                        handleDeleteUser={handleDeleteUser}
                        usersList={usersList}
                        setUsersList={setUsersList}
                    />
                ))}
            </div>
        </div>
    )
}