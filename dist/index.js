var List = React.createClass({displayName: 'List',
    getInitialState: function() {
        return {
            items: [
                {label: 'hoge', complete: false},
                {label: 'fuga', complete: true},
                {label: 'bar',  complete: false},
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


React.render(React.createElement(List, null), document.getElementById('workspace'));
