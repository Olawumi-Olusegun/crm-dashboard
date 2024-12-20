import GoalsCard from "./_components/GoalsCard";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-white flex flex-col">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-1 h-[calc(100dvh-48px)] mt-12">
          <Sidebar />
          <div className="w-full lg:w-[calc(100%-208px)] p-2 lg:ml-[208px]">
            <div className="bg-white w-full rounded-md">
              <GoalsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
