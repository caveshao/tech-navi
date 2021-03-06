import SearchBar from "@/components/SearchBar/SearchBar";
import Dock from "@/components/Dock/Dock";

import styles from "./styles.module.less";
const HomePage = () => {
  return (
    <div className={styles.SearchBarContainer}>
      <SearchBar placeholder="搜索" />
      <Dock />
    </div>
  );
};

export default HomePage;
