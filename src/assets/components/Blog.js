import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Modal from './NewsModal';
import '../styles/blog.css';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [chunkSize, setChunkSize] = useState(3);

  useEffect(() => {
    fetch('/Noticias.json')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Error al cargar noticias:', err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 576) setChunkSize(1);
      else if (width <= 992) setChunkSize(2);
      else setChunkSize(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setSelectedArticle(null);
  };

  const chunkArticles = (articles, chunkSize) => {
    const result = [];
    for (let i = 0; i < articles.length; i += chunkSize) {
      result.push(articles.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedArticles = chunkArticles(articles, chunkSize);

  return (
    <section className="blog-tecnologico py-5" id="blog">
      <div className="container">
        <h2 className="text-center mb-4">Tech Blog</h2>

        <Carousel controls>
          {chunkedArticles.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="card-container">
                {chunk.map((article) => (
                  <div
                    key={article.id}
                    className="blog-card"
                    onClick={() => openModal(article)}
                  >
                    <div
                      className="card-background"
                      style={{ backgroundImage: `url(${article.image})` }}
                    >
                      <div className="blog-overlay">
                        <h4 className="blog-title">{article.title}</h4>
                        <p className="card-description">{article.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {modalActive && selectedArticle && (
        <Modal modalData={selectedArticle} onClose={closeModal} />
      )}
    </section>
  );
};

export default Blog;
