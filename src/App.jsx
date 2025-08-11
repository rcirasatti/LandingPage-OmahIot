import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <main className="App min-h-screen bg-gradient-to-b from-[#F5F8F5] via-[#EDF3EC] to-[#E8EFEA] relative">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYTQgNCAwIDEwMCA4IDQgNCAwIDAwMC04eiIgZmlsbD0icmdiYSg3NCwxMDMsNjUsMC4wOCkiLz48L2c+PC9zdmc+')] opacity-20 -z-10" />
      <div className="fixed inset-0 g-gradient-to-t from-[#E8EFEA] via-transparent to-transparent opacity-50 -z-10" />
      <Navbar />
      <LandingPage />
    </main>
  );
}

export default App;