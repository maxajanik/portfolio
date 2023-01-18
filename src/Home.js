import React, {useState, useEffect} from 'react';
import {db} from './firebase';
import {query, collection, onSnapshot, addDoc} from 'firebase/firestore'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Events from './components/Events';

function Home() {
    const [events, setTodos] = useState([]);
    const [input, setInput] = useState([]);

    const createEvent = async (e) => {
        e.preventDefault(e)
        if(input === '') {
            alert('Please enter text')
            return
        }
        await addDoc(collection(db,'events'), {
            text: input
        })
        setInput('')
    };


    useEffect(()=>{
    const q = query(collection(db, 'events'))
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
        let eventsArray = []
        querySnapshot.forEach((doc) => {
            eventsArray.push({...doc.data(), id: doc.id})
        });
        setTodos(eventsArray)
    })
    return () => unSubscribe()
    },[])

    return(
    <div>
        <h1>Hello World</h1>
        <form onSubmit={createEvent}>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Add Event' />
            <button>Add</button>
        </form>
        <ul>
            {events.map((event, index) => (
                <div>
                   <Events key={index} event={event}/>
                </div>
                ))}
        </ul>
    </div>
    );
}

export default Home;