import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Projects from "./page/Projects";
import TimeEntries from "./page/TimeEntries";
import Layout from "./component/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TimeEntryTable from "./page/TimeEntries/TimeEntryTable";
import AddTimeEntryForm from "./page/TimeEntries/AddTimeEntryForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/projects" />,
  },
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/timeEntries",
        element: <TimeEntries />,
        children: [
          {
            path: "/timeEntries",
            element: <TimeEntryTable />,
          },
          {
            path: "/timeEntries/add",
            element: <AddTimeEntryForm />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
