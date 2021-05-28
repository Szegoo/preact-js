export default ({ type }) => {
  const num = Math.ceil(Math.random() * 3) - 1;
  const alertColors = ["alert-box_warning", "alert-box_danger", "alert-box"];
  return (
    <div className={type || alertColors[num]}>
      <p>Changes saved. This is an alert</p>
      <style>{`
         .alert-box,
          .alert-box_danger,
          .alert-box_warning {
            color: white;
            width: fit-content;
            font-size: 0.9em;
            padding: 0.1em 3em;
            border-radius: 0.5em;
            box-shadow: 1px 1px 10px black;
            animation: pop-up 1s linear;
            animation-fill-mode: forwards;
          }
          .alert-box {
            background-color: hsl(120, 45%, 54%);
          }
          .alert-box_danger {
            background-color: hsl(0, 100%, 65%);
          }
          .alert-box_warning {
            background-color: hsl(24, 100%, 66%);
          }
          @keyframes pop-up {
            0% {
              padding: 0.1em 1em;
              transform: scale(1);
              opacity: 1;
            }
            50% {
              padding: 0.1em 4em;
              transform: scale(1);
              opacity: 1;
            }
            70% {
              padding: 0.1em 3em;
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0.1);
              opacity: 0;
            }
          }
      `}</style>
    </div>
  );
};
