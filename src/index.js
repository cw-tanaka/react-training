var TodoForm = React.createClass({
    render: function() {
        return (<form><input type="text" /></form>);
    }
});

var TodoList = React.createClass({
    getInitialState: function() {
        return {
            items: [
                {id: 1, label: 'hoge', complete: false},
                {id: 2, label: 'fuga', complete: true},
                {id: 3, label: 'bar',  complete: false}
            ]
        };
    },

    render: function() {
        var list = this.state.items.map(function(item) {
            return (
                <li className={item.complete ? "complete" : "yet"}>
                  {item.label}
                </li>
            );
        });

        return (<ul>{list}</ul>);
    }
});

var Todo = React.createClass({
    render: function() {
        return (<div>
            <TodoForm />
            <TodoList />
        </div>);
    }
});

React.render(<Todo />, document.getElementById('workspace'));
