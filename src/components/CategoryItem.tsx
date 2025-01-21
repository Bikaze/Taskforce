interface CategoryItemProps {
  name: string;
  count: number;
  color: string;
}

const CategoryItem = ({ name, count, color }: CategoryItemProps) => (
  <div className="flex items-center justify-between p-4 rounded-lg bg-white">
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 ${color} rounded-full flex items-center justify-center`}
      >
        <span className="text-sm">📊</span>
      </div>
      <span>{name}</span>
    </div>
    <span className="text-gray-500">{count}</span>
  </div>
);

export default CategoryItem;
