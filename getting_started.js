const app = document.getElementById("app");
// const header = document.createElement("h1");
// const headerContent = document.createTextNode("Develop. Preview Ship. 🚀")

// header.appendChild(headerContent);
// app.appendChild(header)

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
    const [like, setLikes] = React.useState(0)
    return(
        <>
            <button onClick={handleClick}>Like({like})</button>
        </>
    )
    
    function handleClick() {
        setLikes(like + 1);
    }
}

const namelist = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

function HomePage() {
    return ( 
        <>
            <Header title = "hoge"/>
            <MyList names = {namelist}/>
            <MyButton />
        </>
    )
}

ReactDOM.render(<HomePage />, app)

