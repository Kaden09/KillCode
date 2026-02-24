interface ITechnologyItem {
  icon: React.ReactNode;
}

function TechnologyItem({ icon }: ITechnologyItem) {
  return (
    <div className="inline-flex items-center justify-center bg-secondary-bg rounded-full border border-border p-6 w-fit shadow-[inset_0_-6px_20px_0_rgba(160,160,160,0.25),inset_0_8px_20px_0px_rgba(0,0,0,0.5)]">
      <span>{icon}</span>
    </div>
  );
}

export default TechnologyItem;
