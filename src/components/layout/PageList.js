import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageItem from './PageItem';

const NewsListBlock = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const PageList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://www.gong-cha.co.kr/brand/${query}.php}`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기중일때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을때
  if (!articles) {
    return null;
  }
  // articles 값이 유효 할때
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <PageItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default PageList;
