import { ItemAddModal } from "./home/itemAdd/ItemAddModal";
import ItemPage from "./home/items/ItemPage";

export default function App() {
  return (
    <div className=" flex flex-col items-center justify-center mt-10">
      <ItemPage></ItemPage>
      <ItemAddModal></ItemAddModal>
    </div>
  );
}
