import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
  // categories 배열은 동일
];

const CategoriesBlock = styled.ul`
  display: flex;
`;

// isHovered와 isScrolled props를 DOM에 전달하지 않도록 설정
const Category = styled(NavLink).withConfig({
  shouldForwardProp: (prop) => !['isHovered', 'isScrolled'].includes(prop),
})`
  font-size: 18px;
  line-height: 100px;
  font-weight: 700;
  color: ${(props) => (props.isHovered || props.isScrolled ? 'black' : 'white')};
`;

const CtDepth2 = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isHovered', 'isScrolled'].includes(prop),
})`
  display: ${(props) => (props.isHovered ? 'block' : 'none')};
  li + li {
    margin-left: 0;
    margin-top: 10px;
  }
  li a {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => (props.isHovered || props.isScrolled ? 'black' : 'white')};
    line-height: 24px;
  }
`;

const CtDepth3 = styled.ul.withConfig({
  shouldForwardProp: (prop) => !['isHovered', 'isScrolled'].includes(prop),
})`
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
    color: ${(props) => (props.isHovered || props.isScrolled ? 'black' : 'white')};
    line-height: 21px;
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
                            <NavLink to={grandChild.name} activeClassName="active">
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
