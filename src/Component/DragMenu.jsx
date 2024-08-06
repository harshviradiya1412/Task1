import { Button, Dropdown, Menu } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

const someData = [
  {
    id: "1",
    key: "Gary Goodspeed",
    sort: 1,
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "2",
    key: "Little Cato",
    sort: 0,
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "3",
    key: "KVN",
    sort: 2,
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "4",
    key: "Mooncake",
    sort: 3,
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "5",
    key: "Quinn Ergon",
    sort: 4,
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

export default function DragMenu() {
  const [listItems, setListItems] = useState(someData);
  const [selectedItems, setSelectedItems] = useState([]); // Set default selected item

  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const clonedListItems = Array.from(listItems);
    const [reorderedItem] = clonedListItems.splice(result.source.index, 1);
    clonedListItems.splice(result.destination.index, 0, reorderedItem);
    setListItems(clonedListItems);
  }
console.log(selectedItems);

  return (
    <div className="App">
      <Dropdown
        placement="bottom"
        trigger={["click"]}
        overlay={
          <Menu
            mode="inline"
            multiple={true}
            selectedKeys={selectedItems} // Use selectedItems to control selection
          >
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="DropId">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {listItems.map((val, index) => (
                      <Draggable draggableId={val.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Menu.Item
                              onClick={() => handleSelect(val.key)}
                              key={val.key}
                            >
                              {val.name}
                            </Menu.Item>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Menu>
        }
      >
        <Button>Manage Menu</Button>
      </Dropdown>
    </div>
  );
}
