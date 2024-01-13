import Admin from "@/components/Admin";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.role === "normal" || !session) {
    redirect("/");
  }
  return <Admin />;
};

export default AdminPage;
