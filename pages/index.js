import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}


function Header({title}) {
    return (<> <h1>{title ? title : 'Default Title'} 🚀</h1> </>)
}

function MyList({names}){
    return (
        <>
            <ul>
                {names.map((name) => (
                    <li key = {name}>{name}</li>
                ))}
            </ul>
        </>
    )
}

function MyButton(){
    const [like, setLikes] = useState(0)
    return(
        <>
            <Button onClick={handleClick}>Like({like})</Button>
        </>
    )
    
    function handleClick() {
        setLikes(like + 1);
    }
}

const namelist = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

export default function HomePage() {
    return ( 
        <>
            <Header title = "hoge"/>
            <MyList names = {namelist}/>
            <MyButton />
        </>
    )
}


