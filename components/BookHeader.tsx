'use client'

import { ModalProps } from "@/fe-models/book";
import { setModalData } from "@/store/modal/modal.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const BookHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const dispatch = useDispatch();

    const handleScroll = () => {
        const divEl: any = document.getElementById('main-el');
        const scrollTop = window.scrollY;
        const offsetTop = divEl?.offsetTop;
        if (offsetTop && (scrollTop >= offsetTop)) {
            setIsSticky(true);
        } else if (offsetTop && (scrollTop < offsetTop)) {
            setIsSticky(false);
        }
    };

    const handleAddNewBook = () => {
        let newBookModal: ModalProps = {
            action: 'create',
            btnText: 'Save',
            title: 'Add New Book'
        };
        dispatch(setModalData(newBookModal));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-1/2 flex flex-col items-center justify-center mt-8" id="main-el">
            <button onClick={handleAddNewBook} className="rounded-[3px] self-start bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add New Book</button>
            <div className={`${isSticky ? 'fixed top-0 w-1/2 z-20 shadow-md' : 'w-full'} bg-white flex items-start justify-start gap-4`}>
                <div className="text-left font-bold p-3 w-[10%]">#</div>
                <div className="text-left font-bold p-3 w-[75%]">Details</div>
                <div className="text-left font-bold p-3 w-[15%]">Price</div>
            </div>
        </div>
    )
}

export default BookHeader