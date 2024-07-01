import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import TimeTableGen from "../pages/TimeTableGen/TimeTableGen";
import ResultTimeTable from "../pages/ResultTimeTable/ResultTimeTable";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timetable-generator" element={<TimeTableGen />} />
      <Route path="/result-timetable" element={<ResultTimeTable />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
