import React from "react";
import Navbar from "../src/Components/html/navbar";
import Sidebar from "../src/Components/html/sidebar";

function Home() {
  return (
    <>
    <main className="main-layout">
      <section className="navbar-column">
        <Navbar />
      </section>
      <section className="sidebar-column">
        <Sidebar />
      </section>
    </main>
    
    </>
  );
}

export default Home;