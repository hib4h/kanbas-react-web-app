import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          
          <ModuleList />
        </div>
        <div>
          <Status />
        </div>
      </div>
    );
  }
export default Home;