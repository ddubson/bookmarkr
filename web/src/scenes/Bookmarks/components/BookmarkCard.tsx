import * as React from "react";

interface BookmarkCardProps {
    id: string;
    title: string;
    content: string;
    link: string;
    removeBookmark: (id: string) => void;
}

export const BookmarkCard = ({id, title, content, link, removeBookmark}: BookmarkCardProps) => (
    <div className="card mt-2">
        <div className="card-body">
            <h4 className="card-title" data-test="bookmark-title">
                {title}
            </h4>
            <div className="card-text">
                <div data-test="bookmark-content">
                  {content}
                </div>
                <div data-test="bookmark-link">
                  {link}
                </div>
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
