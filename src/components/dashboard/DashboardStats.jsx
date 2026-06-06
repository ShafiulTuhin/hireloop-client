import StatCard from "./StatCard";

export default function DashboardStats({ stats, appliedJobs }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          appliedJobs={appliedJobs}
        />
      ))}
    </section>
  );
}
