import Footer from "@/components/footer";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

const App = () => (
  <div className="flex min-h-screen justify-center bg-gray-900">
    <div className="w-[90vw] md:w-[80vw]">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
);

export default App;
