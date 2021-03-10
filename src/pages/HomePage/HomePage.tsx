import SearchBar from "@/components/SearchBar/SearchBar";
import Setting from "@/components/Setting/Setting";
import Dock from "@/components/Dock/Dock";

import styles from "./styles.module.less";

const HomePage = () => {
  return (
    <div className={styles.searchBarContainer}>
      <SearchBar placeholder="搜索" />
      <Setting />
      <Dock />
    </div>
  );
};

export default HomePage;
