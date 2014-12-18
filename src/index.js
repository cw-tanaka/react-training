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


React.render(<TodoList />, document.getElementById('workspace'));
