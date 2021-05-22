export default () => {
  const num = Math.ceil(Math.random() * 3) - 1;
  const alertColors = ["alert-box_warning", "alert-box_danger", "alert-box"];
  return (
    <div className={alertColors[num]}>
      <p>Changes saved. This is an alert</p>
    </div>
  );
};
