import React from 'react'

function UserGreeting(props) {
    return <h1>Hi Random</h1>;
}

function GuestGreeting(props) {
    return <h1>Hi User</h1>;
}

function Body(props)  {

    if (props.name == "true") {
        return <UserGreeting />;
    }
    else {
        return (
            <GuestGreeting />
        );
    }
}

export default Body
