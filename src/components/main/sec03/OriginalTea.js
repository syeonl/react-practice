const OriginalTea = () => {
  console.log('Rendering OriginalTea');
  return (
    <>
      <div className="img">
        <img
          src="/react-practice/images/brand_main_recipe_img1.jpg"
          alt="오리지널 티 이미지"
        />
      </div>
      <div className="teaInfo">
        <h2 className="tit">오리지널 티 - Original Tea</h2>
        <p className="txt">
          티백이나 가루가 아닌 황실에 바치던 잎차만 골라 1도 1초도 어기지 않고
          <br />
          차마다 다른 황금률로 우려 한 잔 한 잔 부드러움을 더해 만듭니다.
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

export default OriginalTea;
