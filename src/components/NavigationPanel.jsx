function NavigationPanel({ changeCurrentDate }) {
  return (
    <div className="navigation-panel">
      <span
        onClick={() => changeCurrentDate("previous")}
        className="material-symbols-outlined"
      >
        chevron_left
      </span>
      <p onClick={() => changeCurrentDate("currentMonth")}>Today</p>
      <span
        onClick={() => changeCurrentDate("next")}
        className="material-symbols-outlined"
      >
        chevron_right
      </span>
    </div>
  );
}

export default NavigationPanel;
