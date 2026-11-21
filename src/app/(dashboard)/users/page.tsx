import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { users } from "@/data/users";

export default function UsersPage() {
  return (
    <div>
      <PageHeader title="Users" description="Manage all registered users." />
      <div className="overflow-hidden rounded bg-white shadow-sm">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="flex justify-between border-b px-4 py-3 hover:bg-gray-50"
          >
            <span className="font-medium text-gray-800">{user.name}</span>
            <span className="text-gray-500">{user.role}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}