import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';

const Franchise = () => {
  return (
    <div className="inner">
      <h2 className="main_title">FRANCHISE</h2>
      <p>지속적으로 성공 창업을 함께합니다.</p>
      <span>
        차(茶)라는 고정관념에 갇히지 않고
        <br />
        지속적인 메뉴개발로 고객에게 새로운 맛의 경험을 선사합니다.
        <br />
        공차만의 프랜차이즈 운영 노하우로 성공 창업을 약속드립니다.
      </span>
      <div className="btnWrap">
        <a href="https://www.gong-cha.co.kr/franchise/success/system.php">
          <span>
            성공창업 바로가기 <IoIosArrowForward className="iconArrow" />
          </span>
        </a>
        <a href="https://www.gong-cha.co.kr/franchise/open/guide.php">
          <span>
            가맹상담 신청 <IoIosArrowForward className="iconArrow" />
          </span>
        </a>
      </div>
      <div className="main-franchise-bg">
        <div className="main-franchise-dot-wrap">
          <span className="main-franchise-dot main-franchise-dot-1">
            <BsDot />
          </span>
          <span className="main-franchise-dot main-franchise-dot-2">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-3">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-4">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-5">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-6">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-7">
            <BsDot className="i" />
          </span>
          <span className="main-franchise-dot main-franchise-dot-8">
            <BsDot className="i" />
          </span>
        </div>
        <div className="main-franchise-item-wrap">
          <div className="main-franchise-item main-franchise-item-1">
            <dl>
              <dt>건대스타시티점</dt>
              <dd>
                <img src="/react-practice/images/store01.png" alt="건대스타시티점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-2">
            <dl>
              <dt>대구이월드점</dt>
              <dd>
                <img src="/react-practice/images/store02.jpg" alt="대구이월드점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-3">
            <dl>
              <dt>롯데월드매직아일랜드점</dt>
              <dd>
                <img src="/react-practice/images/store03.jpg" alt="롯데월드매직아일랜드점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-4">
            <dl>
              <dt>이마트킨텍스점</dt>
              <dd>
                <img src="/react-practice/images/store04.png" alt="이마트킨텍스점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-5">
            <dl>
              <dt>여수해양공원점</dt>
              <dd>
                <img src="/react-practice/images/store05.jpg" alt="여수해양공원점" />
              </dd>
            </dl>
          </div>
        </div>
        <div className="main-franchise-item-wrap-duplic">
          <div className="main-franchise-item main-franchise-item-1">
            <dl>
              <dt>을지트윈타워점</dt>
              <dd>
                <img src="/react-practice/images/store06.jpg" alt="을지트윈타워점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-2">
            <dl>
              <dt>부산센텀점</dt>
              <dd>
                <img src="/react-practice/images/store07.png" alt="부산센텀점" />
              </dd>
            </dl>
          </div>

          <div className="main-franchise-item main-franchise-item-3">
            <dl>
              <dt>광주조선대점</dt>
              <dd>
                <img src="/react-practice/images/store08.jpg" alt="광주조선대점" />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
