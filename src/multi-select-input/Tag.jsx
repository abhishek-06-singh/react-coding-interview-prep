export const Tag = ({ img, firstname, lastname }) => {
  return (
    <span className="flex space-x-3 items-center p-2 cursor-pointer bg-black/50 text-white rounded-full">
      <img className="h-5 w-5 " src={img} alt="" />
      <span className="text-xs">
        {firstname} {lastname}
      </span>
    </span>
  );
};
