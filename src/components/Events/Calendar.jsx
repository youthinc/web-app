import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import React from "react";
import styles from "./styles.module.css";

const Calendar = ({ days, type }) => {
  const renderDay = (day, disabled) => {
    return (
      <div className={cn(styles.day, disabled && styles.inactive)}>{day}</div>
    );
  };

  return (
    <div style={{ width: 280 }} className="mt-6">
      <div className="is-size-4 has-text-centered">
        <button className="button is-small is-rounded mr-2">
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        August 2020
        <button className="button is-small is-rounded ml-2">
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
      <div>
        <div className={cn(styles.day, styles.weekday)}>Mo</div>
        <div className={cn(styles.day, styles.weekday)}>Tu</div>
        <div className={cn(styles.day, styles.weekday)}>We</div>
        <div className={cn(styles.day, styles.weekday)}>Th</div>
        <div className={cn(styles.day, styles.weekday)}>Fr</div>
        <div className={cn(styles.day, styles.weekday)}>Sa</div>
        <div className={cn(styles.day, styles.weekday)}>Su</div>
      </div>
      <div>
        {renderDay(27, true)}
        {renderDay(28, true)}
        {renderDay(29, true)}
        {renderDay(30, true)}
        {renderDay(31, true)}
        {renderDay(1)}
        {renderDay(2)}
      </div>
      <div>
        {renderDay(3)}
        {renderDay(4)}
        {renderDay(5)}
        {renderDay(6)}
        {renderDay(7)}
        {renderDay(8)}
        {renderDay(9)}
      </div>
      <div>
        {renderDay(10)}
        {renderDay(11)}
        {renderDay(12)}
        {renderDay(13)}
        {renderDay(14)}
        {renderDay(15)}
        {renderDay(16)}
      </div>
      <div>
        {renderDay(17)}
        {renderDay(18)}
        {renderDay(19)}
        {renderDay(20)}
        {renderDay(21)}
        {renderDay(22)}
        {renderDay(23)}
      </div>
      <div>
        {renderDay(24)}
        {renderDay(25)}
        {renderDay(26)}
        {renderDay(27)}
        {renderDay(28)}
        {renderDay(29)}
        {renderDay(30)}
      </div>
      <div>
        {renderDay(31)}
        {renderDay(1, true)}
        {renderDay(2, true)}
        {renderDay(3, true)}
        {renderDay(4, true)}
        {renderDay(5, true)}
        {renderDay(6, true)}
      </div>
    </div>
  );
};

export default Calendar;
