'use client'

import { Book, ModalProps } from "@/fe-models/book";
import { addNewBook, deleteBook, updateBook } from "@/store/books/books.slice";
import { RootState } from "@/store/store";
import { categoryList } from "@/utils/book-store";
import { Ref, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const BookModal = () => {
    // Essential Hooks
    const [mandatoryFieldsError, setMandatoryFieldsError] = useState('');
    const dialogRef: Ref<any> = useRef();
    const bookForm: Ref<any> = useRef();
    // Redux Hooks
    const dispatch = useDispatch();
    const modalData: ModalProps = useSelector((state: RootState) => state.bookModal.modalData);
    const bookList: Array<Book> = useSelector((state: RootState) => state.books.bookList);
    // App Var Declarations
    const { title, btnText, action } = modalData;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (event && event.target) {
            const fd: FormData = new FormData(event.target);
            const formData: any = Object.fromEntries(fd);
            const isEmpty: boolean = Object.values(formData).some(val => (val === ''));
            setMandatoryFieldsError('');
            if (isEmpty) {
                setMandatoryFieldsError('Please fill all the fields to add your new book');
                return;
            }
            if (isNaN(formData.bookPrice)) {
                setMandatoryFieldsError('Please enter a proper value in the price field');
                return;
            }
            if (action === 'create') {
                const isBookFound = bookList.some(book => (book.name === formData.bookName));
                if (isBookFound) {
                    setMandatoryFieldsError('Please enter a different book name as the entered name already exists!');
                    return;
                }
                dispatch(addNewBook(formData));
            } else if (action === 'edit') {
                let bookFormData: any = {
                    id: modalData.data?.id,
                    category: formData.bookCategory,
                    description: formData.bookDescription,
                    name: formData.bookName,
                    price: formData.bookPrice,
                    categoryColor: modalData.data?.categoryColor
                }
                dispatch(updateBook(bookFormData));
            }
            event.target.reset();
        }
        dialogRef.current.close();
    }

    const handleDelete: any = (event: Event) => {
        event.preventDefault();
        let bookData: any = modalData.data;
        dispatch(deleteBook(bookData));
        dialogRef.current.close();
    }

    const handleClose = () => {
        setMandatoryFieldsError('');
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }

    useEffect(() => {
        setMandatoryFieldsError('');
        if (modalData && action) {
            if (action === 'edit' && bookForm && bookForm.current) {
                let editBookData: any = {
                    bookCategory: modalData.data?.category,
                    bookDescription: modalData.data?.description,
                    bookName: modalData.data?.name,
                    bookPrice: modalData.data?.price,
                };
                Object.keys(editBookData).forEach(key => {
                    let currentEl = bookForm.current.querySelector(`#${key}`);
                    currentEl.value = editBookData[key];
                });
            }
            if (dialogRef.current) {
                dialogRef.current.showModal();
            }
        }
        return () => {
            handleClose();
        }
    }, [modalData]);

    return (
        <dialog ref={dialogRef} className="p-8 rounded shadow-md w-2/6 backdrop:bg-gray-900/50">
            <div className="flex flex-col">
                {
                    (action !== 'delete') &&
                    <h1 className="modal_head_text text-center mb-3">{title}</h1>
                }
                {
                    (mandatoryFieldsError) &&
                    <h2 className="text-red-600">{mandatoryFieldsError}</h2>
                }
                {
                    (action !== 'delete') &&
                    <form onSubmit={handleSubmit} ref={bookForm} className="flex flex-col items-start justify-center gap-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="bookName" className="font-bold">Book Name</label>
                            <input type="text"
                                name="bookName"
                                id="bookName"
                                className="p-1 rounded-[3px] outline-none border-[1px] border-gray-500/20 focus:border-green-800" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="bookCategory" className="font-bold">Book Category</label>
                            <select name="bookCategory"
                                id="bookCategory"
                                className="p-[4px] py-[7px] rounded-[3px] outline-none border-[1px] border-gray-500/20 focus:border-green-800">
                                {categoryList.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="bookPrice" className="font-bold">Book Price</label>
                            <input type="text"
                                name="bookPrice"
                                id="bookPrice"
                                className="p-1 rounded-[3px] outline-none border-[1px] border-gray-500/20 focus:border-green-800" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="bookDescription" className="font-bold">Description</label>
                            <textarea name="bookDescription"
                                id="bookDescription"
                                className="h-28 p-[4px] py-[7px] rounded-[3px] outline-none border-[1px] border-gray-500/20 focus:border-green-800">
                            </textarea>
                        </div>

                        <div>
                            <button type="submit" className="mr-3 rounded-[3px] self-start bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">{btnText}</button>
                            <button type="reset" onClick={handleClose} className="rounded-[3px] self-start bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Close</button>
                        </div>
                    </form>
                }
                {
                    (action === 'delete') &&
                    <div className="flex flex-col items-start justify-center gap-3">
                        <p className="para_text">{title}</p>
                        <div>
                            <button type="button" onClick={handleDelete} className="mr-3 rounded-[3px] self-start bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">{btnText}</button>
                            <button type="button" onClick={handleClose} className="rounded-[3px] self-start bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">No</button>
                        </div>
                    </div>
                }
            </div>
        </dialog>
    )
};

export default BookModal