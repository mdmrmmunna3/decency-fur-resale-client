import React from 'react';
import blog1 from '../../assets/blog/imge1.png';
import blog2 from '../../assets/blog/imge2.png';
import blog3 from '../../assets/blog/imge3.png';
import blog4 from '../../assets/blog/imge4.png';

const Blog = () => {
    return (
        <div>
            <h1 className='lg:text-3xl text-2xl text-blue-500 text-center font-semibold navbar-title my-8'>Some popular FAQ Qestions here!</h1>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
                <div className='border-2 rounded-lg shadow-lg p-4'>
                    <img src={blog1} alt="" className='w-full h-60' />
                    <h1 className='text-purple-500 text-xl font-semibold my-2'>How does prototypical inheritance work?</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.How does the prototype chain work?
                        The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain</p>
                </div>

                <div className='border-2 rounded-lg shadow-lg p-4'>
                    <img src={blog2} alt="" className='w-full h-60' />
                    <h1 className='text-purple-500 text-xl font-semibold my-2'>What are the different ways to manage a state in a React application?</h1>
                    <p> Different ways to handle state in React applications While both hold information that influences the output of render, they are different in one important way: </p>
                    <li>Local state.</li>
                    <li>Global state.</li>
                    <li>Server state.</li>
                    <li>Navigation state</li>
                    <li>URL state.</li>
                </div>

                <div className='border-2 rounded-lg shadow-lg p-4'>
                    <img src={blog3} alt="" className='w-full h-60' />
                    <h1 className='text-purple-500 text-xl font-semibold my-2'>What is a unit test? Why should we write unit tests?</h1>
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.The isolated part of the definition is important.</p>
                </div>


                <div className='border-2 rounded-lg shadow-lg p-4'>
                    <img src={blog4} alt="" className='w-full h-60' />
                    <h1 className='text-purple-500 text-xl font-semibold my-2'>React vs. Angular vs. Vue?</h1>
                    <div className='grid lg:grid-cols-3 gap-2 grid-cols-1'>

                        <div>
                            <p><span className='font-bold text-xl'>React  </span> is considered a UI library. They define themselves as:
                                <br />
                                <span className=' font-semibold'>“A JavaScript library for building user interfaces” </span> <span className='font-bold'>Facebook </span> developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                            </p>
                        </div>

                        <div>
                            <p><span className='font-bold text-xl'>Vue.js  </span>Last but not least, Vue.js is, according to its site:
                                <br />
                                <span className=' font-semibold'>“A progressive JavaScript framework”</span> Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly.
                            </p>
                        </div>

                        <div>
                            <p><span className='font-bold text-xl'>Angular </span>is a front-end framework with lots of components, services, and tools. On Angular's site, you can see that they define Angular as:
                                <br />
                                <span className=' font-semibold'>“The modern web developer's platform”</span> It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;