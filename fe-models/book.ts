export interface Book {
    id: string;
    name: string;
    price: string | number;
    category: string;
    description: string;
    image?: string;
    categoryColor?: string;
    borderColor?: string;
}

export class ModalProps {
    public title: string;
    public btnText: string;
    public action: string;
    public data?: Book;

    constructor(
        modalTitle: string = '',
        modalBtnText: string = '',
        modalAction: string = '',
        modalData: any = null
    ) {
        this.title = modalTitle;
        this.btnText = modalBtnText;
        this.action = modalAction;
        this.data = modalData;
    }
}