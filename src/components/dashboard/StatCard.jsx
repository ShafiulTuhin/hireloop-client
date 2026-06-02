import { Card } from "@heroui/react";

export default function StatCard({ title, value, icon }) {
  return (
    <Card
      className="
        border border-zinc-800 mt-5
       bg-gradient-to-b from-[#0b1220] via-gray-900 to-[#131313] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20
      "
    >
      <div className="flex flex-col gap-4">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
            bg-zinc-800/70
            text-zinc-300
            transition-all
            duration-300
            group-hover:scale-110
          "
        >
          {icon}
        </div>

        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <h3 className="mt-1 text-3xl font-bold text-zinc-100">{value}</h3>
        </div>
      </div>
    </Card>
  );
}
