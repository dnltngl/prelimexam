import React from "react";

const ThingstoBring = ({item, status}) =>{
const backgroundColor = status ==='on-hand' ? 'pink':
status ==='true' ? 'green': '';

return (
    <li style={{ fontFamily:'timesNewRoman', fontSize: '20px', backgroundColor, listStyle: 'none', padding: '8%', margin: '3%'}}>{{item}}</li>

    );
};

const ListofItems = ({list, listStatus})=>{
    return(
        <ul>
            {list.map((item, index) => )}</ul>
<ThingstoBring key=
        ))
}
