import "./Layout.css";

function Layout({ children }) {
  return (
    <main className="mobile-layout">
      {children}
    </main>
  );
}

export default Layout;