import { Link } from 'react-router-dom';
import '../common.scss';
import './Footer.scss';

const Footer = () => {
  // 이미지 path
  const path = process.env.PUBLIC_URL;

  return (
    <footer id="footer">
      <div className="inner">
        <div className="top_ft">
          <img src={path + '/images/ft_logo.png'} alt="공차 로고 이미지" />
          <div>
            <em>Address</em>
            <span>서울 종로구 종로 47(공평동, 7층)</span>
            <em>Customer Center</em>
            <span>고객센터 : 02-779-7758</span>
          </div>
        </div>
        <div className="bottom_ft">
          <ul className="menu">
            <li>
              <a href="/">회사소개</a>
            </li>
            <li>
              <a href="/">제휴/제안</a>
            </li>
            <li>
              <a href="/">고객센터</a>
            </li>
            <li>
              <a className="point" href="/">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="/">이메일무단수집거부</a>
            </li>
            <li>
              <a href="/">윤리규범 실천지침</a>
            </li>
            <li>
              <a href="/">HOT-LINE</a>
            </li>
          </ul>
          <ul className="info">
            <li>
              <span>(주)공차코리아 대표이사 박재홍</span>
            </li>
            <li>
              <span>사업자등록번호 : 214-88-84534</span>
            </li>
            <li>
              <span>통신판매번호 : 2020-서울종로-0966</span>
            </li>
          </ul>
          <p>Copyright ⓒ GONGCHA KOREA Co., LTD. All Rights Reserved.</p>
          <ul className="sns">
            <li>
              <Link to="https://www.facebook.com/GongCha.Korea">
                <img
                  src={path + '/images/icon-footer-facebook.png'}
                  alt="페이스북"
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/gongcha_korea/">
                <img
                  src={path + '/images/icon-footer-insta.png'}
                  alt="인스타"
                />
              </Link>
            </li>
            <li>
              <Link to="https://pf.kakao.com/_Cywfxb">
                <img
                  src={path + '/images/icon-footer-kakao-new.png'}
                  alt="카카오"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
