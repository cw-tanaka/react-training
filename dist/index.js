var TodoForm = React.createClass({displayName: 'TodoForm',
    render: function() {
        return (React.createElement("form", null, React.createElement("input", {type: "text"})));
    }
});

var TodoList = React.createClass({displayName: 'TodoList',
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
                React.createElement("li", {className: item.complete ? "complete" : "yet"}, 
                  item.label
                )
            );
        });

        return (React.createElement("ul", null, list));
    }
});

var Todo = React.createClass({displayName: 'Todo',
    render: function() {
        return (React.createElement("div", null, 
            React.createElement(TodoForm, null), 
            React.createElement(TodoList, null)
        ));
    }
});

React.render(React.createElement(Todo, null), document.getElementById('workspace'));
