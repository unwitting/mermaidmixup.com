import { h } from "preact";
import s from "./styles.module.scss";

function IndexPageHeroContent() {
  return (
    <>
      <h1 className={s.heading}>MermaidMixup</h1>
      <ul className={s.links}>
        <li>
          <a href="https://mermaidmixup.etsy.com">Shop on Etsy</a>
        </li>
        <li>
          <a href="https://instagram.com/mermaidmixup">Follow on Instagram</a>
        </li>
      </ul>
      <p className={s.afterthoughts}></p>
    </>
  );
}
export default IndexPageHeroContent;
