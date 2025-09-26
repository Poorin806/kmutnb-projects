import { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy imports
const UseStatePage = lazy(() => import("../pages/use-state"));
const UseEffectPage = lazy(() => import("../pages/use-effect"));
const ComingSoonPage = lazy(() => import("../pages/coming-soon"));
const UseContextLayout = lazy(() => import("../pages/use-context/use-context"));
const UseContextSubPage1 = lazy(() => import("../pages/use-context/page-1"));
const UseContextSubPage2 = lazy(() => import("../pages/use-context/page-2"));

export const hookRoutes = [
  <Route key="usestate" path="/usestate" element={<UseStatePage />} />,
  <Route key="useeffect" path="/useeffect" element={<UseEffectPage />} />,
  <Route path="/usereducer" element={<ComingSoonPage name="useReducer" />} />,
  <Route path="/useref" element={<ComingSoonPage name="useRef" />} />,
  <Route path="/usememo" element={<ComingSoonPage name="useMemo" />} />,
  <Route path="/usecallback" element={<ComingSoonPage name="useCallback" />} />,
  <Route key="usecontext" path="/usecontext" element={<UseContextLayout />}>
    <Route index element={<ComingSoonPage name="useContext" />} />
    <Route path="page-1" element={<UseContextSubPage1 />} />
    <Route path="page-2" element={<UseContextSubPage2 />} />
  </Route>,
];
