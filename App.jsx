// App component - represents the whole app
App = React.createClass({

    // Lab 1 = hard coded list
    //getTasks() {
    //    return [
    //        { _id: 1, text: "This is task 1" },
    //        { _id: 2, text: "This is task 2" },
    //        { _id: 3, text: "This is task 3" }
    //    ];
    //},
    //
    //renderTasks() {
    //    return this.getTasks().map((task) => {
    //        return <Task key={task._id} task={task} />;
    //    });
    //},

    // TODO: Lab2 - Use database for tasks

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        return {
            tasks: Tasks.find({}).fetch()
        }
    },

    renderTasks() {
        // Get tasks from this.data.tasks
        return this.data.tasks.map((task) => {
            return <Task key={task._id} task={task} />;
        });
    },

    // TODO: Lab3 - enable Add New Task form

    //handleSubmit(event) {
    //    event.preventDefault();
    //
    //    // Find the text field via the React ref
    //    var text = React.findDOMNode(this.refs.textInput).value.trim();
    //
    //    Tasks.insert({
    //        text: text,
    //        createdAt: new Date() // current time
    //    });
    //
    //    // Clear form
    //    React.findDOMNode(this.refs.textInput).value = "";
    //},

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
});