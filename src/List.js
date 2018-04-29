import React, { Component } from 'react';

class List extends Component {

    constructor(props) {
        super(props);
    }

    deleteFromList(id){
        console.log('deleting row with id: ' + id.index);
        this.props.todos.splice(id.index, 1);
        this.setState({todos: this.props.todos})
    };

    render() {

        const row = this.props.todos.map((item, index) =>
            <tr key={index}>
                <td>{item.desc}</td>
                <td>{item.tododate}</td>
                <td><button onClick={this.deleteFromList.bind(this, {index})}>Delete</button></td>
            </tr>
        );

        let tableStyle = {
            'tableWidth':'50%',
            'border': "1px solid black",
            'align': "center",
            'marginLeft': "550px",
            'marginTop': "10px",
            '#tableStyle th textAlign' :'left'
        };

        return (
            <div>
                <table style={tableStyle}>
                    <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {row}
                    </tbody>
                </table>
            </div>
                );
    }

}

export default List;