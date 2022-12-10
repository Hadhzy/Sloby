import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Home Wrapper Component for / page
export function Home() {
  return (
    <div className="theme-case-home">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
