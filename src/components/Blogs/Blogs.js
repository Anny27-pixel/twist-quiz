import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-violet-800 rounded-3xl m-20 p-16'>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-32 my-6">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of react-router?
                </div>
                <div className="collapse-content">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-32">
                <div className="collapse-title text-xl font-medium">
                    How does context api works?
                </div>
                <div className="collapse-content">
                    <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-32 my-6">
                <div className="collapse-title text-xl font-medium">
                    what do you know about UseRef?
                </div>
                <div className="collapse-content">
                    <p>The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<code>const refContainer = useRef(initialValue);</code></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;