import Link from "next/link";
import defaultStyles from '../../styles/default.module.css'

const DefaultLayout = ({ children }) => (
  <div className={defaultStyles.defaultcontainer}>
    <div className={defaultStyles.sidebar}>
          <Link href="/Guide/fishPage">
            <a className={defaultStyles.a}>Fish</a>
          </Link>
          <Link href="/Guide/insectsPage">
            <a className={defaultStyles.a}>Insects</a>
          </Link>
    </div>

    <div className={defaultStyles.main}>{children}</div>
  </div>
);

export default DefaultLayout;