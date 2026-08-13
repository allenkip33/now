import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

const blogData = {
  name: "My Personal Blog",
  image: "https://placeholder.com", 
  about: "Welcome to my static React blog! Learning components, JSX, and props.",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2026",
      preview: "Setting up your very first functional component in React.",
    },
    {
      id: 2,
      title: "React JSX Rules",
      date: "December 20, 2026",
      preview: "Demystifying JavaScript XML and how it works under the hood.",
    },
    {
      id: 3,
      title: "Mastering Props",
      preview: "No date provided here, so it falls back to the default date rule.",
    }
  ]
};

function App() {
  return (
    <div className="App">
      {}
      <Header name={blogData.name} />
      
      {}
      <About image={blogData.image} about={blogData.about} />
      
      {}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
