import { useAppSelector } from "../../../hooks/Hooks";

const IncompleteExpanse = () => {
  const income = useAppSelector((state) => state.expanse.income);
  const expanse = useAppSelector((state) => state.expanse.expanse);
  return (
    <div>
      <div>
        <div>expanse<span>${expanse}</span></div>
      </div>
      <div>Income<span>${income}</span></div>
    </div>
  );
};

export default IncompleteExpanse;
