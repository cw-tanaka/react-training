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


React.render(React.createElement(TodoList, null), document.getElementById('workspace'));
