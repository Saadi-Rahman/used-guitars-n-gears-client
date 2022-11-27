import React from 'react';
import difference from '../../assets/images/difference.jpg';
import prototypical from '../../assets/images/prototypical.png';

const Blog = () => {
    return (
        <div className="mx-4 md:mx-10 lg:mx-24 lg:pb-10">
            <h4 className='text-xl text-primary font-bold font-oswald uppercase mb-2'>Our weekly blogs</h4>
            <h2 className='text-xl text-secondary font-oswald mb-10'>All the latest tech blogs are here! Read on and get some tricks and tips.</h2>

            <div className='mb-8'>
                <h2 className='text-xl text-primary font-oswald'>What are the different ways to manage a state in a React application?</h2>
                <hr style={{backgroundColor: '#6E300E', height: '2px'}} className="my-2" />

                <h2 className='text-lg text-secondary font-oswald'>The Four Kinds of React State to Manage</h2>
                <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter. <br /> <br />

                <span className='font-semibold'>There are four main types of state you need to properly manage in your React apps:</span> <br />
                1. Local state <br />
                2. Global state <br />
                3. Server state <br />
                4. URL state <br /> <br />

                <span className='font-semibold pb-3'>Let's cover each of these in detail:</span> <br />

                <span className='font-semibold'>Local state:</span> <br />
                Local state is data we manage in one or another component.Local state is most often managed in React using the "useState" hook. <br />
                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs. <br /> <br />
                
                <span className='font-semibold'>Global state:</span> <br />
                Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global. <br /> <br />
                
                <span className='font-semibold'>Server state:</span> <br />
                Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br /> <br />
                
                <span className='font-semibold'>URL state:</span> <br />
                Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! <br />
                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build. <br /> <br />
                </p>
            </div>

            <div className='mb-16'>
                <h2 className='text-xl text-primary font-oswald'>How does prototypical inheritance work?</h2>
                <hr style={{backgroundColor: '#6E300E', height: '1px'}} className="my-2" />

                <h2 className='text-lg text-secondary font-oswald'>Prototypical inheritance</h2>
                <p>Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class. Prototypes are hidden objects that are used to share the properties and methods of a parent class to child classes.<br /> <br /></p>

                <h2 className='text-lg text-secondary font-oswald'>How does prototypical inheritance work?</h2>
                <p>Every object with its methods and properties contains an internal and hidden property known as <span className='font-semibold'>[[Prototype]]</span>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <span className='font-semibold'>[[Prototype]]</span> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using <span className='font-semibold'>__proto__</span>.<br /> <br />

                <span className='font-semibold'>Syntax:</span> <br />ChildObject.__proto__ = ParentObject <br /> <br /></p>

                <div>
                    <img src={prototypical} alt="" />
                </div>
            </div>

            <div className='mb-8'>
                <h2 className='text-xl text-primary font-oswald'>What is a unit test? Why should we write unit tests?</h2>
                <hr style={{backgroundColor: '#6E300E', height: '2px'}} className="my-2" />

                <h2 className='text-lg text-secondary font-oswald'>What is a Unit Test?</h2>
                <p>A unit test verifies the behavior of a unit of software in the system. It verifies whether a small and isolated piece of the codebase called “unit” behaves as the developer intended. <br />
                Unit tests verify the smallest parts or components of an application by comparing their actual behavior with the expected behavior in complete isolation. Here, “complete isolation” means that, during unit testing, devs do not connect the application with external dependencies such as databases, the filesystem, or HTTP services. This allows unit tests to be fast and stable since they won’t fail due to problems integrating with those external services. <br /> <br /> </p>

                <h2 className='text-lg text-secondary font-oswald'>Why should we write unit tests?</h2>
                <p>Usually, developers write unit tests first, then write the software code. This approach is known as test-driven development (TDD). In TDD, the requirements are turned into specific test cases, then the software is improved to pass the new tests. In the case of unit tests, it allows for the modification of code without affecting the functionality of other units or the software in its entirety. This makes the job easier for developers as the bugs are easy to locate at this stage, which saves time and money. <br />
                Also, within unit test environments, the individual modules of a product become isolated from one another and have their own area of responsibility. In this scenario, tests are more reliable because they are run in a contained environment. The code too, because of said reliability, becomes reliable. <br /> <br />
                Along with the above facts, let’s explore the various benefits of unit tests.</p>

                <p className='pt-2'><span className='font-semibold'>Benefits of Unit Tests:</span> <br />
                1. Unit tests help to find and fix bugs quickly and easily. <br />
                2. Unit tests contribute to higher code quality. <br />
                3. Unit tests contribute to better application architecture. <br />
                4. Unit tests act as documentation. <br /> <br />

                The main advantage of unit tests is their laser-sharp focus. Since they test a single function, they give precise feedback. If a unit test fails, then in the vast majority of cases testers can be sure that the specific function being tested is the problem. <br />
                Unit tests are also known for their speed. Since they’re fast, they’re executed more often, making them a source of nearly constant valuable feedback. <br /> <br /></p>
            </div>
            
            <div className='mb-8'>
                <h2 className='text-xl text-primary font-oswald'>React vs. Angular vs. Vue</h2>
                <hr style={{backgroundColor: '#6E300E', height: '1.5px'}} className="my-2" />

                <h2 className='text-lg text-secondary font-oswald'>What is React?</h2>
                <p>Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages. <br />
                One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course. <br />
                With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native. <br /> <br /> </p>

                <h2 className='text-lg text-secondary font-oswald'>What is Angular?</h2>
                <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. <br />
                Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications. <br /> <br /> </p>

                <h2 className='text-lg text-secondary font-oswald'>What is Vue?</h2>
                <p>Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks. <br />
                Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications. <br />
                Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications. <br /> <br /> </p>

                <h2 className='text-lg md:text-xl text-secondary text-center font-oswald pb-4 mt-6'>Key Differences Between Angular.Js, React.Js And Vue.Js</h2>
                <div className='lg:w-11/12 mx-auto'>
                    <img src={difference} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Blog;