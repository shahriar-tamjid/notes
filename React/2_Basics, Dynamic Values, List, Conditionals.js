/*
The components returns code in the JSX format which is JavaScript XML. By using that syntax we can put HTML directly into our JavaScript.
*/
function App() {
    // To use dynamic values like variables we can declare them just before the return statement and call them inside the return statement using the curly braces {}
    const title = 'Blog Post';
    const body = 'This is a blog post!';

    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'}
    ];

    // We can use arrays or lists in a dynamic way. First we need to declare the array or list before the return statement.
    // Then inside the return statement we need to give a curly braces and there we need to call the array and give ".map()" method to it.
    // The ".map()" method takes two parameters. First one is callback function and it returns some JSX.
    // In the callback function we can define which parameters we need to use to perform action and use them inside the JSX section of the function.

    // Conditionals
    const loading = false; // if it's true then it will render the return inside the if statement
    
    if(loading) return <h1>Loading...</h1>

    // let's say we wanna return some portion of the component.
    // Topic: If showComments is true then show the 'comments' section. Otherwise hide it
    // To do so we need to use curly braces {} and inside it the format should be {condition && (action)}
    const showComments = true; // here the condition is showComments itself, which is true

    return (
        // We cannot return multiple elements. We must return one parent element and every other element must be inside that parent element.
        // If we don't want any element to wrap our other elements then we can use empty fragments which is like --> <> other elements </>

        // In JSX we cannot use 'class' keyword to specify class in HTML. We need to use 'className'.
        // In VS Code if we just type ".my-class" then it will automatically create a div element with a class name of "my-class"
        <div className="my-class">
            <h1>My App</h1>
            <p>Hello World!</p>
        </div>

        <div>
            {/* We can also use JS methods and functions inside the curly braces {} */}

            <h1>{title.toUpperCase()}</h1>   {/* Output --> BLOG POST */}
            <p>{body.toLowerCase()}</p>    {/* Output --> this is a blog post! */}

            {showComments && (
                <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                            // When you create a list using .map() you should create a "key" prop which will be unique to every child of the list.
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// In order to make component available outside its scope we need to export that component.
// We can do so doing "export default ComponentName"
export default App;