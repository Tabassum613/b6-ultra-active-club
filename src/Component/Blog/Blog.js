import React from 'react'
import "./Blog.css";
const Blog = () => {
    return (
        <div className='container'>
            <div><h1 className='question'><b>Some Question about React</b> </h1></div>

            <div id='accordian'>
                <section id='q1'>
                    <a href="#q1"><h4><b>How does react work?</b> </h4></a>
                    <p>React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!
                    </p>
                </section>
            </div>
            <div id='accordian'>
                <section id='q2'>
                    <a href="#q2"><h4><b>Difference between props and state?</b></h4></a>
                    <p><h5><b> PROPS</b></h5>
                        1.The Data is passed from one component to another. <br />
                        2.It is Immutable. <br />
                        3.Props can be used with state and functional components. <br />
                        4.Props are read-only.
                        <h5><b>STATE</b></h5>
                        1.The Data is passed within the component only. <br />
                        2.It is Mutable. <br />
                        3.State can be used only with the state components/class component . <br />
                        4.State is both read and write.

                    </p>
                </section>
            </div>
            <div id='accordian'>
                <section id='q3'>
                    <a href="#q3"><h4><b>Why use useEffect without using loading data in react?</b></h4> </a>
                    <p>If we’re using hooks in React function components, we can load data from an API when the component first loads by using the useEffect hook with an empty array as the second argument.</p>
                </section>
            </div>

            <div id='accordian'>
                <section id='q4'>
                    <a href="#q4"><h4><b>Is React front-end or backend?</b></h4> </a>
                    <p><h5><b>front-end</b></h5>
                        ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook. Moreover, React Js makes Front-end development very easy.</p>
                </section>
            </div>
            <div id='accordian'>
                <section id='q5'>
                    <a href="#q5"><h4><b>Is React easy to learn?</b></h4> </a>
                    <p>
                        React is a cool tool for web development, and as cool as it is, it's very easy to learn. Learning it at the right time puts you at a higher advantage. To step up your web development career with React you can learn NextJS or Remix easily.</p>
                </section>
            </div>
        </div >

    )
}

export default Blog
