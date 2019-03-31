import React from 'react'

const tableStyle ={
    width: 300,
    padding: 3
}

const List = (props) => (
    <ul>
        <table>
        {
            props.items.map((item,index) => 
                <tr>
                    <li key={index}>
                        <td style={tableStyle}>{item}</td>
                        <td><button onClick={props.handleDelete.bind(this, item)} >Delete</button></td>
                    </li>
                </tr>
            )
        }
        </table>
        <style jsx>{`
        button{
            background-color: red;
            color: white;
            border:1px, solid;
            border-radius: 10px;
            font-size: 12px;
            padding: 5px;
        }`
    }</style>
    </ul>
    
)

export default List