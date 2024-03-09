import React from "react";
import { useNavigate } from "react-router-dom";


function About() {

    return(
        <div>
            <h2>О НАС</h2>
            <div className='block-aboutUS'>
                <img src='/images/about/about.jpg' />
            </div>
        </div>
    )
}

export default About;