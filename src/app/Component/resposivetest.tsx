const ResponsiveGrid = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Responsive Grid</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-blue-200 p-4 rounded-lg">Card 1</div>
          <div className="bg-blue-300 p-4 rounded-lg">Card 2</div>
          <div className="bg-blue-400 p-4 rounded-lg">Card 3</div>
          <div className="bg-blue-500 p-4 rounded-lg">Card 4</div>
        </div>
      </div>
    );
  };
  
  export default ResponsiveGrid;
  