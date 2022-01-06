import { FC } from "react";
import { DragDropContext, Responders } from "react-beautiful-dnd";

export interface IDragAndDropBlockProps extends Responders {
    children: Node | null,
}

export const DragAndDropBlock: FC<IDragAndDropBlockProps> = (props) => {

    const { children, onDragEnd } = props;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {children}
        </DragDropContext>
    )
}