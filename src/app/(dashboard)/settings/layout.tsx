import PageHeader from "@/components/ui/PageHeader";
import SettingsMenu from "@/components/settings/SettingsMenu";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader title="Settings" description="Manage your account." />
      <div className="flex gap-8">
        <SettingsMenu />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}