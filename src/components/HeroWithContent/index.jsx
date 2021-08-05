import { h } from "preact";
import s from "./styles.module.scss";

function HeroWithContent({ children }) {
  return (
    <main className={s.main}>
      <img
        className={s.backing}
        src="https://images.unsplash.com/photo-1602101319087-18d00e6109c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
      />
      <div className={s.overlay}>{children}</div>
    </main>
  );
}
export default HeroWithContent;
