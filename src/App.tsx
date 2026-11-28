import { RouterProvider } from "react-router";
import { PreferencesProvider } from "./preferences/preferences-context";
import router from "./routes";

export default function App() {
  return (
    <PreferencesProvider>
      <RouterProvider router={router} />
    </PreferencesProvider>
  );
}
