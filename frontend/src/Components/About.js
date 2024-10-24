import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    Book library is an exciting and impactful project that fosters a love for reading and provides a valuable resource for the community. 
                    The library will serve as a welcoming space where individuals of all ages can explore a diverse collection of books across various genres, including fiction, non-fiction, history, and science. 
                    <br/>
                        <br/>
                        The library can incorporate digital resources, such as e-books and audiobooks, making literature accessible to everyone, regardless of their reading preferences.  
                        The goal is to create not just a collection of books, but a vibrant hub for knowledge, creativity, and connection.<br/>
                        <br/>
                        By providing a comfortable and inspiring environment, the library will invite visitors to immerse themselves in stories, explore new ideas, and enjoy the transformative power of reading. 
                        Overall, this book library will play a crucial role in enriching the community and promoting a culture of learning and exploration.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
