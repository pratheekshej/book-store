'use client'

import { useDispatch, useSelector } from 'react-redux';
import { categoryColor } from '../utils/book-store';
import BookCard from './BookCard';
import { Book, ModalProps } from '@/fe-models/book';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { setModalData } from '@/store/modal/modal.slice';

const BookList = () => {
    let booksInStock: Array<Book> = useSelector((state: RootState) => state.books.bookList);
    const [bookStoreList, setBookStoreList] = useState(booksInStock);
    const dispatch = useDispatch();
    let colorObj: any = categoryColor;

    const handleCardClick = (book: Book, e: Event) => {
        e.preventDefault();
        let modalEditData: ModalProps = {
            action: 'edit',
            btnText: 'Update',
            title: 'Edit Book',
            data: book
        };
        dispatch(setModalData(modalEditData))
    }

    const handleDeleteClick = (book: Book, e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        let modalDeleteData: ModalProps = {
            action: 'delete',
            btnText: 'Yes',
            title: `Are you sure you want to delete the book - ${book.name}?`,
            data: book
        };
        dispatch(setModalData(modalDeleteData))
    }

    useEffect(() => {
        if (booksInStock) {
            setBookStoreList([...booksInStock].map(book => ({
                ...book,
                categoryColor: colorObj[book.category]
            })));
        }
    }, [booksInStock]);

    return (
        <div className="w-1/2 flex flex-col items-center justify-center mb-12">
            <div className="w-full flex flex-grow flex-col items-center justify-start gap-6">
                {
                    bookStoreList.map((book, i) => {
                        return <BookCard key={`${i}_${book.name}`}
                            index={i + 1}
                            handleCardClick={(e: Event) => handleCardClick(book, e)}
                            handleDeleteClick={(e: Event) => handleDeleteClick(book, e)}
                            {...book} />
                    })
                }
                {
                    bookStoreList.length === 0 &&
                    <div className={`p-5 w-full flex items-center justify-center gap-4 shadow-lg shadow-indigo-500/40 rounded relative`}>
                        You have no records. Please add new Book to update the store list.
                    </div>
                }
            </div>
        </div>
    )
}

export default BookList