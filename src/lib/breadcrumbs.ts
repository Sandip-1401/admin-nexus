import { users } from "@/data/users";

export function getCrumbLabel(segments: string[], index: number) {
  const segment = segments[index];

  if (segments[index - 1] === "users") {
    const user = users.find((u) => u.id === segment);
    if (user) return user.name;
  }

  return segment.charAt(0).toUpperCase() + segment.slice(1);
}