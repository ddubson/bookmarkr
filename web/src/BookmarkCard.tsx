import * as React from "react";

interface BookmarkCardProps {
    id: string;
    title: string;
    link: string;
    removeBookmark: (id: string) => void;
}

export const BookmarkCard = ({id, title, link, removeBookmark}: BookmarkCardProps) => (
    <div className="card mt-2">
        <div className="card-body">
            <h4 className="card-title">
                {title}
            </h4>
            <div className="card-text">
                {link}
            </div>
        </div>
        <div className="card-body">
            <a href="#" onClick={() => {
                removeBookmark(id);
            }}
               data-test="bookmark-remove"
               className="card-link">Remove</a>
        </div>
    </div>
);
