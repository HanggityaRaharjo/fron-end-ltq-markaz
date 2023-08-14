const Breadcrumbs = ({ children }) => {
  return (
    <div className="flex gap-5 items-center px-5 mb-5 bg-white border-l-4 border-[#169859] w-fit py-2 rounded-md rounded-l-none shadow-md">
      {children}
    </div>
  );
};

export default Breadcrumbs;
