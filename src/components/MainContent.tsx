import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my homepage. This is a simple website built with React and TypeScript.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>This is a demo website to showcase the usage of React components and TypeScript.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can contact us at: example@example.com</p>
      </section>
    </main>
  );
}

export default MainContent;
