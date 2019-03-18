import Link from 'next/link'
import React, { Component } from 'react'
import List from '../comps/List.js'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            items: []
        }

    }

    handleDelete(item){
        let newItems = this.state.items.filter((_item) =>{
            return _item != item
        })
        this.setState({ items: newItems})
    }

    onChange = (event) =>{
        this.setState({
            term: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        })
    }

    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button>Submit</button>
                </form>
                <List items={this.state.items} handleDelete={this.handleDelete.bind(this)}/>
            </div>
        )
    }
}


