import { Book } from "@/fe-models/book";

const BookCard = (props: any) => {
    const { name, category, description, price, categoryColor }: Book = props;
    const { index, handleCardClick, handleDeleteClick } = props;
    const borderStyle: object = {
        borderTop: `8px solid ${categoryColor}`,
        opacity: '0.5'
    };
    const textColor: object = {
        color: categoryColor
    }

    const renderDescription = (): string => {
        if (description.length >= 150) {
            return description.slice(0, 150) + '...';
        }
        return description;
    }

    return (
        <div onClick={handleCardClick} className={`pt-2 w-full flex items-start justify-start gap-4 shadow-lg shadow-indigo-500/40 h-52 rounded relative cursor-pointer`}>
            <div className="w-full absolute top-0 rounded-tl rounded-tr h-2" style={borderStyle} />
            <div className="p-3 w-[10%]">{index}</div>
            <div className="p-3 w-[75%] flex flex-col h-full items-start justify-between">
                <div>
                    <div className="font-semibold">{name}</div>
                    <div className="mt-1 italic font-bold" style={textColor}>#{category}</div>
                    <div className="mt-3" title={description}>{renderDescription()}</div>
                </div>
                <div>
                    <a onClick={handleDeleteClick} className="mt-2 text-red-700 hover:underline hover:font-semibold">Delete</a>
                </div>
            </div>
            <div className="p-3 w-[15%]">${price}</div>
        </div>
    )
}

export default BookCard