function Card({ children }) {
  return (
    <div className="bg-black bg-opacity-50 w-96 shadow-xl rounded-lg p-6">
      <div className="text-white">{children}</div>
    </div>
  );
}

export default Card;
