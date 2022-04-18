import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <div>
                <h2>Question No-01: Difference between authorization and authentication</h2>
                <p>Authentication</p>
                <ul>
                    <li>In authentication process, the identity of users are checked for providing the access to the system.</li>
                    <li>In authentication process, users or persons are verified</li>
                    <li>It is done before the authorization process.</li>
                    <li>It needs usually users login details.</li>
                </ul>

                <p>Authorization</p>
                <ul>
                    <li>While in authorization process, persons or users authorities are checked for accessing the resources</li>
                    <li>While this process is done after the authentication process.</li>
                    <li>While it needs users privilege or security levels.</li>
                    <li>While in this process, users or persons are validated.</li>
                </ul>
            </div >

            <div>
                <h2>Question No-03: 2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p> I'm using Firebase Authentication to allow users to sign in to my app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.Firebase Authentication makes it easier to get our users signed-in without having to understand the complexities behind implementing your own authentication system.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>

            <div>


                <div>
                    <h2>Quention No-03. What other services does firebase provide other than authentication?</h2>
                    <p> Parse Open Source Backend Platform; Back4app Parse Hosting Platform; Kinvey Mobile Backend as a Service (mBaaS) for the Enterprise; Backendless Mobile Backend and API Services Platform; Kuzzle Backend for web, hybrid, or native mobile apps and IoT projects; Pubnub Real-time APIs and Global Messaging; Kumulos App Performance Management; Game Sparks Game Backend Platform; Hoodie Generic backend with a client API for Offline First applications; Appwrite Open-Source backend for Flutter developers Deployd Simple core library, with a modular API for your application; NHost Accelerates development and provides full control; Amplify JS Open-source Javascript framework; Heroku Platform as a service backed by Salesforce.</p>
                </div>

            </div>

        </div >
    );
};

export default Blogs;