const ShimmerUI = () => {
  return (
    <>
      <div className="card-container-box mt-1rem">
        {Array(8)
          .fill("")
          ?.map(() => (
            <div className="card-item-box "></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerUI;
