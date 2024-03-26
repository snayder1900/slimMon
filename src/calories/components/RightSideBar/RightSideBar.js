import React from 'react';
import { useSelector } from 'react-redux';
import styles from './RightSideBar.module.scss';
import userSelectors from '../../redux/user/userSelectors';
import mealsSelectors from '../../redux/meals/mealsSelectors';

export default function RightSideBar() {
  const dailyLimit = useSelector(userSelectors.getUserDailyLimit);
  const notRecommended = useSelector(userSelectors.getUserNotRecommendedFood);
  const mealsOnDay = useSelector(mealsSelectors.getFood);
  const forday = useSelector(mealsSelectors.getDate);

  let sumKcal = 0;
  mealsOnDay.map(item => {
    Number(item.kcal);
    sumKcal += item.kcal;
  });
  const leftForDay = dailyLimit - sumKcal;
  const percentConsumed = (sumKcal * 100) / dailyLimit;
  const notRecommendedFormatted = notRecommended.map(
    item => item.charAt(0).toUpperCase() + item.slice(1),
  );
  const notRecommendedFormattedString = notRecommendedFormatted.join(', ');

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.summary}>
          <h2 className={styles.title}>Resumen para el día {forday}</h2>
          <div className={styles.statistics}>
            <ul className={styles.listName}>
              <li className={styles.list_wrap}>
                <span className={styles.text}>Restante</span>
                <span className={styles.text}>
                  {dailyLimit ? `${Math.round(leftForDay)} kcal` : '000 kcal'}
                </span>
              </li>
              <li className={styles.list_wrap}>
                <span className={styles.text}>Consumido</span>
                <span className={styles.text}>
                  {mealsOnDay.length === 0
                    ? '000 kcal'
                    : `${Math.round(sumKcal)} kcal`}
                </span>
              </li>
              <li className={styles.list_wrap}>
                <span className={styles.text}>Meta diaria</span>
                <span className={styles.text}>
                  {dailyLimit ? `${Math.round(dailyLimit)} kcal` : '000 kcal'}
                </span>
              </li>
              <li className={styles.list_wrap}>
                <span className={styles.text}>% de la meta</span>
                <span className={styles.text}>
                  {dailyLimit ? `${percentConsumed.toFixed(0)} %` : '000 kcal'}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.title}>Alimentos no recomendados</h2>
          <span className={styles.text}>
            {notRecommended.length === 0
              ? 'Aquí se mostrará su régimen alimenticio'
              : notRecommendedFormattedString}
          </span>
        </div>
      </div>
    </div>
  );
}
