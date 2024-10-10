function CustomShape() {
    return (
      <div className="w-[600px] h-[300px] bg-teal-400 rounded-lg relative">
        {/* Cut-out Shape using clip-path */}
        <div
          className="absolute inset-0 bg-teal-400"
          style={{
            clipPath: 'polygon(0 0, 50% 0, 50% 40%, 100% 40%, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>
    );
  }
  
  export default CustomShape;
  