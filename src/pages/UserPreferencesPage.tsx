import PageContainer from "./components/PageContainer";
import Header from "./components/Header";

function UserPreferencesPage() {
  return (
    <>
      <Header />
      <PageContainer
        isLoading={false}
        content={
          <div>
            <h1 className="text-xl font-bold">User Preferences</h1>
            <p>Settings and preferences will be available here.</p>
          </div>
        }
      />
    </>
  );
}

export default UserPreferencesPage;