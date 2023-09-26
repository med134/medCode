import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
export default function DashboardLayout({ children }) {
  return (
    <Layout className="w-full py-0 lg:p-4 xl:p-2 md:p-2 md:py-2">
        <NavigationBar />
        {children} 
    </Layout>
  );
}
