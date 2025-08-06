const InfoCard = ({ icon, title, children }) => {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-green-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-lg sm:text-xl">{icon}</span>
        <span className="text-base sm:text-xl">{title}</span>
      </h3>
      <div className="space-y-2 text-sm sm:text-base text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;