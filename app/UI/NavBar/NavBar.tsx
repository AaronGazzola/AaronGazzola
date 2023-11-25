const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center text-brand-1000 ">
      <h1 className="text-xl font-expanded">Aaron Gazzola's Portfolio</h1>
      <div className="flex space-x-10 font-expanded m-20">
        <div>3d origami</div>
        <div>Interactive story book</div>
        <div>UI demos</div>
      </div>
    </div>
  );
};

export default Navbar;
