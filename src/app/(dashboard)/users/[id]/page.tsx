import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { users } from "@/data/users";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) notFound();

  return (
    <div>
      <PageHeader title={user.name} description={user.email} />
      <p className="text-gray-700">Role: {user.role}</p>
    </div>
  );
}