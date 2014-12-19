var TodoForm = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();

        var label = this.refs.todo.getDOMNode().value;

        this.props.addNewItem(label);
    },

    render: function() {
        return (<form onSubmit={this.onSubmit}><input type="text" ref="todo" /></form>);
    }
});

var TodoItem = React.createClass({

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
            <li className={item.complete ? "complete" : "yet"} key={item.id}>
              <input type="checkbox" onChange={this.onChangeCheckbox} checked={item.complete} />
              <span onClick={this.onClickLabel}>{item.label}</span>
            </li>
        );
    }
});

var TodoList = React.createClass({

    render: function() {
        var list = this.props.items.map(function(item) {
            return <TodoItem item={item} toggleComplete={this.props.toggleComplete} />;
        }.bind(this));

        return (<ul>{list}</ul>);
    }
});

var Todo = React.createClass({
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
        return (<div>
            <TodoForm addNewItem={this.addNewItem} />
            <TodoList items={this.state.items} toggleComplete={this.toggleComplete} />
        </div>);
    }
});

React.render(<Todo />, document.getElementById('workspace'));
