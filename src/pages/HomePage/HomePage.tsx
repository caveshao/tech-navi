import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./styles.module.less";
const HomePage = () => {
  return (
    <div className={styles.SearchBarContainer}>
      <SearchBar />
    </div>
  );
};

export default HomePage;
