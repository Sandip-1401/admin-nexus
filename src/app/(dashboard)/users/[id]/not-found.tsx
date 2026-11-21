import Link from "next/link";

export default function UserNotFound() {
  return (
    <div className="rounded bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">User not found</h2>
      <p className="mt-1 text-gray-600">This user does not exist.</p>
      <Link href="/users" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to users
      </Link>
    </div>
  );
}