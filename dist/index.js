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

var TodoItem = React.createClass({displayName: 'TodoItem',

    toggle: function() {
        this.props.toggleComplete(this.props.item.id);
    },

    onChangeCheckbox: function(e) {
        this.toggle();
    },

    onClickLabel: function(e) {
        this.toggle();
    },

    render: function() {
        var item = this.props.item;

        return (
            React.createElement("li", {className: item.complete ? "complete" : "yet", key: item.id}, 
              React.createElement("input", {type: "checkbox", onChange: this.onChangeCheckbox, checked: item.complete}), 
              React.createElement("span", {onClick: this.onClickLabel}, item.label)
            )
        );
    }
});

var TodoList = React.createClass({displayName: 'TodoList',

    render: function() {
        var list = this.props.items.map(function(item) {
            return React.createElement(TodoItem, {item: item, toggleComplete: this.props.toggleComplete});
        }.bind(this));

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

    toggleComplete: function(id) {
        var newItems = this.state.items.map(function(item) {
            if (id === item.id) {
                item.complete = ! item.complete;
                return item;
            }

            return item;
        });

        this.setState({
            items: newItems
        });
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
            React.createElement(TodoList, {items: this.state.items, toggleComplete: this.toggleComplete})
        ));
    }
});

React.render(React.createElement(Todo, null), document.getElementById('workspace'));
