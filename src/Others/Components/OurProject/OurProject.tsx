import { Navigate, Route, Routes } from "react-router-dom";

import GoalContent from "./GoalContent";
function OurProject() {
  // const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="goal" />} />
        <Route path="goal" element={<GoalContent />} />
      </Routes>
    </div>
  );
}

export default OurProject;
