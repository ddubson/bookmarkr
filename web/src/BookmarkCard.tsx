import * as React from "react";

interface BookmarkCardProps {
    title: string,
    link: string
}

export const BookmarkCard = ({title, link}: BookmarkCardProps) => (
    <div className="card mt-2">
        <div className="card-body">
            <h4 className="card-title">
                {title}
            </h4>
            <div className="card-text">
                {link}
            </div>
        </div>
    </div>
);
