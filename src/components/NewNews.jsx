export default function NewNews(props) {
  return (
    <div className="py-10 border-b border-gray-400">
      <h3 className="mb-3 text-xl font-bold">{props.title}</h3>
      <p className="text-gray-400">{props.desc}</p>
    </div>
  );
}
