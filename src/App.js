import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import "./App.css";

import {
  getSelectedNavigationTab,
  setActiveTab,
} from "./store/modules/navigationTab";
import AddShipping from "./pages/addShipping";
import ViewShipping from "./pages/viewShipping";

const App = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector(getSelectedNavigationTab);
  const handleTabChange = (tab) => dispatch(setActiveTab(tab));

  return (
    <div className="App">
      <Header activeTab={activeTab} onTabChange={handleTabChange}></Header>
      <main>
        {activeTab === "add" && <AddShipping />}
        {activeTab === "view" && <ViewShipping />}
      </main>
    </div>
  );
};

export default App;
