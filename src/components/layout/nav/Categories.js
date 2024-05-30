// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
  {
    title: '공차 소개',
    name: 'brand/story',
    children: [
      {
        title: '공차 소개',
        name: 'brand/story',
        children: [
          {
            title: '공차의 약속',
            name: 'brand/promise',
          },
          {
            title: '브랜드 아이덴티티',
            name: 'brand/identity',
          },
          {
            title: '세계속의 공차',
            name: 'brand/global',
          },
        ],
      },
      {
        title: '매장',
        name: 'store/search',
        children: [
          {
            title: '매장 찾기',
            name: 'store/search',
          },
        ],
      },
    ],
  },
  {
    title: '다양한 메뉴',
    name: 'menu/order',
    children: [
      {
        title: '주문 방법',
        name: 'menu/order',
      },
      {
        title: '신메뉴',
        name: 'menu/new',
      },
      {
        title: '음료',
        name: 'menu/product',
      },
      {
        title: '빙수',
        name: 'menu/product.php?c=004',
      },
      {
        title: '디저트',
        name: 'menu/product.php?c=002',
      },
      {
        title: 'MD 상품',
        name: 'menu/product.php?c=003',
      },
      {
        title: '티스토리',
        name: 'menu/teaStory',
      },
      {
        title: '티레시피',
        name: 'menu/teaRecipe',
      },
    ],
  },
  {
    title: '공차 앱 & 맴버십',
    name: 'member/membership',
    children: [
      {
        title: '공차 앱 & 맴버십',
        name: 'member/membership',
      },
      {
        title: '공차 카드 & e-GIFT',
        name: 'member/membership3',
      },
      {
        title: 'FAQ',
        name: 'member/faq',
      },
    ],
  },
  {
    title: '제휴 서비스',
    name: 'benefit/benefit',
    children: [
      {
        title: '통신사 제휴',
        name: 'benefit/benefit',
      },
      {
        title: '결제 서비스',
        name: 'benefit/payment',
      },
    ],
  },
  {
    title: '가맹정 창업안내',
    name: 'franchise',
    children: [
      {
        title: '가맹점 개설 문의',
        name: 'franchise/open/guide',
      },
    ],
  },
  {
    title: '이벤트 & 공지',
    name: 'board/event',
    children: [
      {
        title: '이벤트',
        name: 'board/event',
      },
      {
        title: '공지사항',
        name: 'board/notice',
      },
    ],
  },
];

const CategoriesBlock = styled.ul`
  display: flex;
`;

const Category = styled(NavLink)`
  font-size: 18px;
  color: ${(props) =>
    props.isHovered || props.isScrolled ? 'black' : 'white'};
  line-height: 100px;
  font-weight: 700;
`;

const CtDepth2 = styled.ul`
  display: ${(props) => (props.isHovered ? 'block' : 'none')};
  li + li {
    margin-left: 0;
    margin-top: 10px;
  }
  li a {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    line-height: 24px;
    color: ${(props) =>
      props.isHovered || props.isScrolled ? 'black' : 'white'};
  }
`;
const CtDepth3 = styled.ul`
  display: ${(props) => (props.isHovered ? 'block' : 'none')};
  li + li {
    margin-left: 0;
    margin-top: 10px;
  }
  li {
    margin-top: 8px;
  }
  li a {
    font-size: 14px;
    color: #707070 !important;
    line-height: 21px;
    color: ${(props) =>
      props.isHovered || props.isScrolled ? 'black' : 'white'};
  }
`;

const Categories = ({ isHovered, isScrolled }) => {
  return (
    <nav>
      <CategoriesBlock className="gnb">
        {categories.map((c) => (
          <li key={c.name}>
            <Category
              isHovered={isHovered}
              isScrolled={isScrolled}
              to={c.name === 'all' ? '/' : `/${c.name}`}
              activeClassName="active"
            >
              {c.title}
            </Category>
            {c.children && (
              <CtDepth2 isHovered={isHovered} isScrolled={isScrolled}>
                {c.children.map((child) => (
                  <li key={child.name}>
                    <NavLink to={child.name} activeClassName="active">
                      {child.title}
                    </NavLink>
                    {child.children && (
                      <CtDepth3 isHovered={isHovered} isScrolled={isScrolled}>
                        {child.children.map((grandChild) => (
                          <li key={grandChild.name}>
                            <NavLink
                              to={grandChild.name}
                              activeClassName="active"
                            >
                              {grandChild.title}
                            </NavLink>
                          </li>
                        ))}
                      </CtDepth3>
                    )}
                  </li>
                ))}
              </CtDepth2>
            )}
          </li>
        ))}
      </CategoriesBlock>
    </nav>
  );
};

export default Categories;
