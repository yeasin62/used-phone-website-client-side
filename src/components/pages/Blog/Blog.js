import React from 'react';

const Blog = () => {
    return (
        <div className='mt-28 md:w-4/5 mx-auto'>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p>Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development (TDD). In TDD, requirements are turned into specific test cases, then the software is improved to pass the new tests. In this approach, no code is added that hasn’t been proven to meet defined requirements. Unit testing is similar, in that it allows developers to modify code without affecting the functionality of other units or the product, as a whole.</p>

                    <p>Unit tests are usually written in the form of functions and check the value and behavior of these functions in various scenarios. For example, let’s imagine a function for the division of two numbers: the developer decides to follow the TDD approach, first writing a test with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’ expected as the result. Another example: when the divisor is zero, we don’t expect that the function will produce a value—we expect that it will generate an exception. We can expect that the function will notify some component about an attempt to divide by zero.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.</p>

                    <p>Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.</p>

                    <p>Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;