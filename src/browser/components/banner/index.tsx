import style from './index.module.css';

export const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <h1 className={style.h1}>
        <a>
          <span className={style.name}>木兰花令</span>
        </a>
        <span> • </span>
        <span className={style.description}>次欧公西湖韵</span>
      </h1>
    </div>
  );
};
