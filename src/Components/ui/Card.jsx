const Card = (props) => {
  return (
    <div
      className="flex flex-col rounded-b-lg transition-all duration-300 ease-out hover:scale-105
  hover:shadow-lg hover:shadow-cyan-700"
    >
      <div className="flex w-64 max-w-xs items-center justify-center rounded-t-lg border bg-slate-50 p-6">
        {props.icon}
      </div>
      <div className="flex items-center justify-between rounded-b-lg border p-4 py-7">
        <span className="font-semibold text-slate-700">{props.title}</span>
        <span className="font-medium text-slate-700">{props.display}</span>
      </div>
    </div>
  );
};

export default Card;
