import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// setup components
const Person = ({img, name, job, children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return(
        <article className="person">
            <img src ={url} alt="person" />
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}

const PersonList = () => {
    return <section className="person-list">
        <Person img="34" name="Brad" job="Developer"><p>Hi its me! Brad I am data Full Stack Developer.
            I am working as a freelancer from past two years.</p>
        </Person>
        <Person img="32" name="James" job="Java Developer"><p>Hi its me! James I am Java Developer.
            I am working for Google from past two years.</p>
        </Person>
        <Person img="35" name="Mosh" job="Data Engineer">
        <p>Hi its me! Mosh I am data Engineer. I am working for facebook from past two years.</p>
        </Person>
    </section> 
}


ReactDOM.render(<PersonList />, document.getElementById('root'));
