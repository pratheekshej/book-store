import { Fragment } from "react";
import BookList from "./BookList"
import BookModal from "./BookModal";
import BookHeader from "./BookHeader";

const Feed = () => {
    return (
        <Fragment>
            <BookModal />
            <BookHeader />
            <BookList />
        </Fragment>
    )
}

export default Feed