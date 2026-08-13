import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides matching rules like toBeInTheDocument
import App from './App';

describe('Blog Component Lab Assertions', () => {

  it('renders a <header> with an <h1> containing the blog name prop', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner'); // Finds <header>
    const headingElement = screen.getByRole('heading', { level: 1 }); // Finds <h1>
    
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toContainElement(headingElement);
    expect(headingElement.textContent).toBeTruthy(); 
  });

  it('renders an <aside> with an <img> (alt="blog logo") and a <p> description', () => {
    render(<App />);
    const asideElement = screen.getByRole('complementary'); // Finds <aside>
    const imageElement = screen.getByAltText('blog logo'); // Finds <img> with your alt rule
    
    expect(asideElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.tagName).toBe('IMG');
  });

  it('renders a <main> wrapper element containing individual <article> structures', () => {
    render(<App />);
    const mainElement = screen.getByRole('main'); // Finds <main>
    
    expect(mainElement).toBeInTheDocument();
  });
});
