var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn coding'
        }, {
          id: 2,
          text: 'Earn money'
        }, {
          id: 3,
          text: 'Learn Buddha Dharma'
        }, {
          id: 4,
          text: 'Have fun'
        }, {
          id: 5,
          text: 'Be happy'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
