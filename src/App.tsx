import { RouterProvider } from "react-router";
import PreferencesControls from "./components/shared/preferences-controls";
import { PreferencesProvider } from "./preferences/preferences-context";
import router from "./routes";

export default function App() {
  return (
    <PreferencesProvider>
      <PreferencesControls />
      <RouterProvider router={router} />
    </PreferencesProvider>
  );
}
