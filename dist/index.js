var TodoForm = React.createClass({displayName: 'TodoForm',

    onSubmit: function(e) {
        e.preventDefault();

        var label = this.refs.todo.getDOMNode().value;

        this.props.addNewItem(label);
    },

    render: function() {
        return (React.createElement("form", {onSubmit: this.onSubmit}, React.createElement("input", {type: "text", ref: "todo"})));
    }
});

var TodoList = React.createClass({displayName: 'TodoList',

    render: function() {
        var list = this.props.items.map(function(item) {
            return (
                React.createElement("li", {className: item.complete ? "complete" : "yet", key: item.id}, 
                  item.label
                )
            );
        });

        return (React.createElement("ul", null, list));
    }
});

var Todo = React.createClass({displayName: 'Todo',
    getInitialState: function() {
        return {
            items: [
                {id: 1, label: 'hoge', complete: false},
                {id: 2, label: 'fuga', complete: true},
                {id: 3, label: 'bar',  complete: false}
            ]
        };
    },

    addNewItem: function(label) {
        var items = this.state.items;
        var item = {
            id: items.length + 1,
            label: label,
            complete: false
        };

        this.setState({
            items: items.concat([item])
        });
    },

    render: function() {
        return (React.createElement("div", null, 
            React.createElement(TodoForm, {addNewItem: this.addNewItem}), 
            React.createElement(TodoList, {items: this.state.items})
        ));
    }
});

React.render(React.createElement(Todo, null), document.getElementById('workspace'));
