import React from 'react';

const MilkTea = () => {
  return (
    <>
      <div className="img">
        <img src="/react-practice/images/brand_main_recipe_img2.jpg" alt="밀크티 이미지" />
      </div>
      <div className="teaInfo">
        <h2 className="tit">밀크티 - Milk Tea</h2>
        <p className="txt">
          최적의 자연이 키워낸 입차만 골라 각 차종에 맞는 황금률로 우려 담백한
          우유와
          <br />
          허니, 카라멜 등 새로운 맛을 더해 만듭니다.
        </p>
        <a
          className="btnOpen"
          href="https://www.gong-cha.co.kr/brand/menu/product.php?c=001003"
        >
          메뉴 보러가기{' '}
          <img src="/react-practice/images/btn_arr_red.png" alt="메뉴보러가기" />
        </a>
      </div>
    </>
  );
};

export default MilkTea;
