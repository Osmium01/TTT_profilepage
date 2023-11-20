import React from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Posts from './components/Posts';
import CoverPhoto from './components/CoverPhoto';
import Bio from './components/Bio';

const color = {
  color: 'skyblue',
   // Set the color to sky blue
   padding: '10px'
};

const profiledata = {
  "profilePictureUrl": "https://example.com/profile.jpg",
  "name": "Aman Singh",
  "followers": 1000,
  "following": 500,
  "designationd": "Software Engineer",
  "instaUrl": "https://www.instagram.com/b_a_b_u_s_a_h_e_b.__1/?hl=en",
};


const posts = [
  {
    "id": 1,
    "title": "Introduction to Machine Learning",
    "content": "Machine learning is a branch of artificial intelligence that focuses on the development of algorithms to enable computers to learn and make predictions or decisions without being explicitly programmed.",
    "writtenBy": "Alex Johnson",
    "date": "2023-01-15",
    "minRead": 8,
    "views": 12000
  },
  {
    "id": 2,
    "title": "The Power of CSS Grid Layout",
    "content": "CSS Grid Layout is a two-dimensional layout system for the web that allows you to design complex web page layouts with ease. Learn how to harness the power of CSS Grid for responsive and flexible designs.",
    "writtenBy": "Emily Davis",
    "date": "2023-02-22",
    "minRead": 6,
    "views": 8000
  },
  {
    "id": 3,
    "title": "Getting Started with Python Flask",
    "content": "Flask is a lightweight web application framework written in Python. This blog post provides a step-by-step guide on getting started with Flask, creating routes, and building a simple web application.",
    "writtenBy": "Michael Carter",
    "date": "2023-03-10",
    "minRead": 10,
    "views": 9500
  },
  {
    "id": 4,
    "title": "Understanding Blockchain Technology",
    "content": "Blockchain is a decentralized and distributed ledger technology that underlies cryptocurrencies like Bitcoin. Explore the fundamental concepts of blockchain and its potential applications.",
    "writtenBy": "Sophie Robinson",
    "date": "2023-04-05",
    "minRead": 12,
    "views": 15000
  },
  {
    "id": 5,
    "title": "Responsive Web Design Best Practices",
    "content": "Learn the best practices for creating responsive web designs that work seamlessly across various devices and screen sizes. Explore media queries, flexible grids, and other techniques.",
    "writtenBy": "Daniel Miller",
    "date": "2023-05-20",
    "minRead": 7,
    "views": 11000
  },
  {
    "id": 6,
    "title": "Deep Learning and Neural Networks",
    "content": "Deep learning is a subset of machine learning that involves neural networks with multiple layers. Dive into the world of deep learning and understand how neural networks can solve complex problems.",
    "writtenBy": "Grace Turner",
    "date": "2023-06-15",
    "minRead": 9,
    "views": 13500
  },
  {
    "id": 7,
    "title": "Mastering Git for Version Control",
    "content": "Git is a powerful version control system widely used in software development. Learn essential Git commands, branching strategies, and collaboration workflows to streamline your development process.",
    "writtenBy": "David Anderson",
    "date": "2023-07-08",
    "minRead": 11,
    "views": 12500
  },
  {
    "id": 8,
    "title": "Building RESTful APIs with Node.js and Express",
    "content": "Create robust and scalable RESTful APIs using Node.js and the Express framework. This tutorial covers the basics of API design, routing, middleware, and database integration.",
    "writtenBy": "Olivia Smith",
    "date": "2023-08-17",
    "minRead": 10,
    "views": 14000
  },
  {
    "id": 9,
    "title": "Introduction to Cybersecurity",
    "content": "Cybersecurity is the practice of protecting computer systems, networks, and data from security breaches. Explore the fundamental principles of cybersecurity and common security measures.",
    "writtenBy": "Nathan White",
    "date": "2023-09-12",
    "minRead": 8,
    "views": 11500
  },
  {
    "id": 10,
    "title": "The Future of Artificial Intelligence",
    "content": "Examine the current trends and future possibilities of artificial intelligence. Explore advancements in AI research, applications, and the potential impact on various industries.",
    "writtenBy": "Isabella Taylor",
    "date": "2023-10-25",
    "minRead": 15,
    "views": 18000
  }
];


const App = () => (
  <div>
    <Header />
    <CoverPhoto />
    <UserInfo />  
    <Bio data = {profiledata} />
    <div className="posts-container">
      <h2 className='p' style={color}>{posts.length} Posts
      </h2>
      <Posts blogs = {posts} />
    </div>
   
    
  </div>
);

export default App;
