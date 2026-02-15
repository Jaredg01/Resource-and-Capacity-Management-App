export default function Layout({ children, modal }) {
  return (
    <>
      {children}   {/* Main Initiatives page */}
      {modal}      {/* Modal overlay slot */}
    </>
  );
}