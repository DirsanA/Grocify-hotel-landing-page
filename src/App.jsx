import Header from "./Header";
import Mainbody from "./Mainbody";
const App = () => {
  return (
    <div>
      <Header /> {/* Navbar stays at the top */}
      <Mainbody className="flex-1" /> {/* Takes remaining space */}
    </div>
  );
};
export default App;
