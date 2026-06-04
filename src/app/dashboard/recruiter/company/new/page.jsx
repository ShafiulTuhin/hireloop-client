import CreateCompanyProfile from "@/components/dashboard/company/CreateCompanyProfile";
import { getUserSession } from "@/lib/core/session";

const CreateCompanyPage = async () => {
  const user = await getUserSession();
  console.log(user);

  return (
    <div>
      <CreateCompanyProfile user={user} />
    </div>
  );
};

export default CreateCompanyPage;
