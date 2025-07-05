import { useGetItemsQuery } from "@/redux/api/itemCreateAPi";
import { useState } from "react";
import UpdateForm from "../updateItem/UpdateItem";
import { getColumns, type Item } from "./columns";
import { DataTable } from "./data-table";

export default function ItemPage() {
  const [editItem, setEditItem] = useState<Item | null>(null);
  const { data, isLoading } = useGetItemsQuery(undefined);
  if (isLoading) {
    return <p>loading...</p>;
  }

  const handleEdit = (item: Item) => {
    setEditItem(item);
   // eventually open modal here
  };

  return (
    <div>
      <p className="text-3xl my-2"> ItemPage</p>

      <DataTable columns={getColumns(handleEdit)} data={data}></DataTable>

      {editItem && (
        <UpdateForm
          item={editItem}
          open={true}
          onClose={() => setEditItem(null)}
        />
      )}
    </div>
  );
}
