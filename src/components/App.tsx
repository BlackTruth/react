import { hot } from "react-hot-loader/root";
import * as React from "react";
import { useEffect, useState } from "react";
import styles from "./app.module.scss";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Clicked ${count} times!`);
  }, [count]);
  return (
    <main>
      <h1 className={styles.main}>
        <span className={styles.mainLetter}>H</span>ello react!
      </h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </main>
  );
};

export default hot(App);
