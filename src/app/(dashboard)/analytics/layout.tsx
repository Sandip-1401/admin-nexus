import PageHeader from "@/components/ui/PageHeader";
import AnalyticsTabs from "@/components/analytics/AnalyticsTabs";

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader title="Analytics" description="Track revenue and traffic." />
      <AnalyticsTabs />
      {children}
    </div>
  );
}