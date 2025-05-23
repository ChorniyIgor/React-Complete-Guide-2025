import Button from "./Button";

export default function Sidebar({ onAddNewProject, onSelect, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onAddNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project, key) => (
          <li key={key}>
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => {
                onSelect(key);
              }}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
