import React from "react";

function Button(){
    const data = {
        anoop : {
            "todos" : [
                {"title" : "Go to Shopping"},
                {"title" : "Go to Shopping"},
                {"title" : "Go to Shopping"},
                {"title" : "Go to Shopping"},
                {"title" : "Go to Shopping"},
                {"title" : "Go to Shopping"}
            ]
        }
    }

    return(
        <div>
            {data.anoop.todos.map((item, index) => {
                return <div key={index}>{item.title}</div>
            })}
        </div>
    );
}

export default Button;