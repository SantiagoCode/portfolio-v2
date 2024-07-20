const Layout = ({ children, ...props }) => {
  return (
    <section className="layout" {...props}>
      {children}
    </section>
  );
};

export default Layout;
