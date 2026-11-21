export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const users: User[] = [
  { id: "1", name: "Aarav Shah", email: "aarav@nexus.com", role: "Admin" },
  { id: "2", name: "Diya Patel", email: "diya@nexus.com", role: "Editor" },
  { id: "3", name: "Kabir Mehta", email: "kabir@nexus.com", role: "Viewer" },
  { id: "4", name: "Eren Yeger", email: "eren@nexus.com", role: "Viewer" },
  { id: "6", name: "Ervin Smith", email: "ervin@nexus.com", role: "Admin" },
  { id: "5", name: "Mikash Arkemen", email: "mikash@nexus.com", role: "Viewer" },
];