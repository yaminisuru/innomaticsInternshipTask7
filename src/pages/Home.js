import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4 text-danger">Welcome to Innomatics Research Labs</h1>
      <p className="lead  mt-4">
        Innomatics Research Labs is a cutting-edge research organization that aims to bridge the gap between academia and industry.
        We specialize in Artificial Intelligence, Data Science, Machine Learning, and other IT services that help businesses stay ahead in the digital age.
      </p>
      <p className="lead mt-3">
        With a team of highly skilled professionals and researchers, Innomatics focuses on delivering innovative solutions that drive real-world impact.
        Join us as we innovate and revolutionize technology for a better future.
      </p>
      <a href="/services" className="btn btn-danger btn-lg mt-3">Explore Our Services</a>
    </div>
  );
}

export default Home;
