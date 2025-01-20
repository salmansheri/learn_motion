import AccountToggle from "./account-toggle";
import Search from "./search";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky  top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
      </div>
      {/* TODO: Plan Toggle */}
    </div>
  );
};

export default Sidebar;
