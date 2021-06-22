import React from 'react'

export default function ImagesCard({ image }) {

    const tags = image.tags.split(",");
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full"alt="msg" src={image.webformatURL} />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li><strong>Views</strong> {image.views}</li>
                    <li><strong>Comments</strong> {image.comments}</li>
                    <li><strong>Downloads</strong> {image.downloads}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="span inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
