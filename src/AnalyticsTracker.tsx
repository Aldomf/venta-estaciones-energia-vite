import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logPageView } from "./utils/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}