const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="bg-rose-500 h-full">
        Layout!
        <hr />
        {children}
      </div>
    </div>
  );
};

export default TestLayout;
