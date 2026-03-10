import GrowthLine from "./GrowthLine";
import GrowthStepsList from "./GrowthStepsList";

function GrowthScheme() {
  return (
    <div className="flex flex-row gap-7 sm:gap-10 w-full lg:flex-col lg:gap-5">
      <GrowthLine />
      <GrowthStepsList />
    </div>
  );
}

export default GrowthScheme;
