import { SlobyDashboard, SlobyProjectHandlerContainer } from "../../utils/styles/Dashboard";
import SlobyMenu from "./SlobyMenu";
// import { useDispatch } from "react-redux"
// import { AppDispatch } from "../../store/redux"
// import { setSearchbar } from "../../store/redux/dashboard/dashboardSlice"
import { useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RootState } from "../../store";
import ProjectModal from "./ProjectModal";

function Dashboard() {
  const dashboardSlice = useSelector((state: RootState) => {
    console.log(state);
    return state.projectDashboard;
  });
  const [searchParams] = useSearchParams();
  console.log(searchParams.getAll);
  return (
    <SlobyDashboard>
      <SlobyMenu />
      <SlobyProjectHandlerContainer>
        {dashboardSlice.projectModal && <ProjectModal />}
        {dashboardSlice.shouldNotificationDisplay && (
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            style={{ textAlign: "center" }}
          />
        )}
        <Outlet />
      </SlobyProjectHandlerContainer>
    </SlobyDashboard>
  );
}

export default Dashboard;
