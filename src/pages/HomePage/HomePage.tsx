import s from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className="border-2 border-solid border-cyan-500 p-3">
      <h1 className={s.title}>Portfolio</h1>
      <ul>
        <li>Weather</li>
      </ul>
    </div>
  );
};
