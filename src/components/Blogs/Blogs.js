import React from 'react';
import './Blogs.css'


const Blogs = () => {
    return (
        <div>
            <div className='container py-5'>
                <h3 className='mb-5'>Q1. What is the difference between javascript and nodejs?</h3>
                <table class="table table-bordered border-primary w-50">
                    <thead>
                        <tr>
                            <th>Basis Of <br /> Comparison <br /> Between JavaScript <br /> vs Node JS</th>
                            <th>JavaScript</th>
                            <th>Node JS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                            <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                        </tr>
                        <tr>
                            <th>Utility</th>
                            <td>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                            <td>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
                        </tr>
                        <tr>
                            <th>Running Engine</th>
                            <td>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                            <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='container py-3'>
                <h3 className='mb-3'>Q2.1 When should you use nodejs?</h3>
                <p>Node. js is primarily used for non-blocking, event-driven servers, <br /> due to its single-threaded nature. It's used for traditional web sites <br /> and back-end API services, but was designed with real-time, <br /> push-based architectures in mind.</p>
            </div>
            <div className='container py-3'>
                <h3 className='mb-3'>Q2.2 When should you use mongodb?</h3>
                <p>NoSQL databases like MongoDB are a good choice when your data <br /> is document-centric and doesn't fit well into the schema of a relational <br /> database, when you need to accommodate massive scale, when <br /> you are rapidly prototyping, and a few other use cases.</p>
            </div>
            <div className='container py-3'>
                <h3 className='mb-4'>Q3. What is the differences between sql and nosql databases?</h3>
                <table class="table table-dark table-hover w-75 text-center">
                    <thead>
                        <tr>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                        <tr>
                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='container py-3'>
                <h3 className='mb-3'>Q4.1 What is the purpose of jwt?</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share <br /> security information between two parties — a client and a server. <br /> Each JWT contains encoded JSON objects, including a set of claims. <br /> JWTs are signed using a cryptographic algorithm to ensure that the <br /> claims cannot be altered after the token is issued.</p>
            </div>
            <div className='container py-3'>
                <h3 className='mb-3'>Q4.2 How does it work?</h3>
                <p>JWTs differ from other web tokens in that they contain a set of claims. <br /> Claims are used to transmit information between two parties. <br /> What these claims are depends on the use case at hand. For example, <br /> a claim may assert who issued the token, how long it is valid for, <br /> or what permissions the client has been granted.
                </p>
            </div>
        </div>
    );
};

export default Blogs;