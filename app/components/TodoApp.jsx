var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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

  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
