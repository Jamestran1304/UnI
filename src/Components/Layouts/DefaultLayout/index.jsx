import Sidebar from "./Sidebar/Sidebar";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="sidebar-container">
      <Sidebar style={{ height: "100%" }} />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
