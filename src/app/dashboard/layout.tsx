import { Header } from "@/components";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative h-screen w-full bg-[#FFFBF8] overflow-hidden">
            <Header />
            <main className="h-full w-full overflow-hidden">
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;