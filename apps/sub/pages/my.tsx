import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function My() {
  return (
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          My Page
        </div>
      </main>
  );
}
