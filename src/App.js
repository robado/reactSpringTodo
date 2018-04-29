import React, { Component } from 'react';
import './App.css';
import List from "./List";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {tododate: '', desc: '', todos: []};
    }

    inputChangedDesc = (event) => {
        this.setState({desc: event.target.value});
    };
    inputChangedDate = (event) => {
        this.setState({tododate: event.target.value});
    };

    addTodo = (event) => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, ({desc: this.state.desc,
                tododate: this.state.tododate})
            ]
        });
        console.log(this.state.todos);
    };

    render() {
        return <div className="App">
            <div className="App-header">
                <h2>Simple Todolist</h2>
            </div>
            <div>
                <form onSubmit={this.addTodo}>
                    <input style={{marginTop: 1 + 'em'}} name="description" type="text" onChange={this.inputChangedDesc} value={this.state.desc}
                           placeholder={"DESCRIPTION"}/>
                    <input name="date" type="date" onChange={this.inputChangedDate} value={this.state.tododate}
                           placeholder={"DATE"}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
            <List todos={this.state.todos}/>
        </div>;
    }
}

export default App;