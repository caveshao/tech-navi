import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./styles.module.less";
const HomePage = () => {
  return (
    <div className={styles.SearchBarContainer}>
      <SearchBar placeholder="搜索" />
    </div>
  );
};

export default HomePage;
