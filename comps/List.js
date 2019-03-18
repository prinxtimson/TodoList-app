import React from 'react'

const tableStyle ={
    width: 200,
    padding: 3
}

const List = props => (
    <ul>
        <table>
        {
            props.items.map((item,index) => 
                <tr>
                    <li key={index}>
                        <td style={tableStyle}>{item}</td>
                        <td><button onClick={props.handleDelete.bind(null, item)} >Delete</button></td>
                    </li>
                </tr>
            )
        }
        </table>
    </ul>
)

export default List