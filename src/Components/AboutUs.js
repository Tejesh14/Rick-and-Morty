import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="container text-start mt-5">
            <div className="mt-3">
                <h5 className="heading inc-size">What is this?</h5>
                <p>The Rick &amp; Morty is a React REST based on Television show Rick &amp; Morty. Here you can read about the characters and can gain knowledge about the characters.</p>
                <Link to="/character"><span className="links">Check out the characters to get started</span></Link>
            </div>
            <div className="mt-3">
                <h5 className="heading inc-size">Technical Stuff</h5>
                <p>I used React, React Dom, React Bootstrap, Axios and added some CSS to it to look good.</p>
            </div>
            <div className="mt-3">
                <h5 className="heading inc-size">Copyright?</h5>
                <p>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.</p>
                <p>The API I used is Rick &amp; Morty API.</p>
            </div>
        </div>
    )
}
