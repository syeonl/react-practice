import React from 'react';

const FruitTea = () => {
  return (
    <>
      <div className="img">
        <img
          src="../images/brand_main_recipe_img5.jpg"
          alt="오리지널 티 이미지"
        />
      </div>
      <div className="teaInfo">
        <h2 className="tit">프룻티 – Fruit Tea</h2>
        <p className="txt">
          찻잎의 푸름을 간직한 녹차만 골라 최적의 온도 89℃로 우려
          <br />
          달콤상큼한 과일을 더해 만듭니다.
        </p>
        <a
          className="btnOpen"
          href="https://www.gong-cha.co.kr/brand/menu/product.php?c=001003"
        >
          메뉴 보러가기{' '}
          <img src="../images/btn_arr_red.png" alt="메뉴보러가기" />
        </a>
      </div>
    </>
  );
};

export default FruitTea;
