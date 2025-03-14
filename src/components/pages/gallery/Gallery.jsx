import React, {useContext, useState} from 'react';
import GalleryComponent from './GalleryComponent';
import {DataContext} from "../context/DataProvider";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Gallery() {
    const [activeTab, setActiveTab] = useState(1);

    const {courses, loading} = useContext(DataContext); // Use context and loading state

    // Определяем галереи для текущей вкладки
    const activeGalleries = activeTab === 0
        ? courses.flatMap((tab) => tab.galleries)
        : courses.find(tab => tab.id === activeTab)?.galleries || [];

    return (
        <main className="px-5 max-w-[1300px] mx-auto py-5 flex flex-col min-h-[52.3vh]">
            <div className="flex flex-col gap-[20px]">
                <p className="text-5xl text-color12 font-roboto-slab font-bold">Gallery</p>
            </div>
            <div className="grid
             lg:grid-cols-6 sm:grid-cols-4 grid-cols-2
             w-full text-center">
                {loading ? (
                    // Skeleton loading for tabs
                    Array(12).fill().map((_, index) => (
                        <div key={`tab-skeleton-${index}`} className="pb-2">
                            <Skeleton width="80%" height={30} />
                        </div>
                    ))
                ) : (
                    // Actual tabs
                    courses.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${
                                activeTab === tab.id
                                    ? 'border-b-[1px] border-primary text-primary'
                                    : 'text-color12'
                            } focus:outline-none font-roboto-slab font-bold text-xl pb-2 capitalize `}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.name}
                        </button>
                    ))
                )}
            </div>
            <div>
                <GalleryComponent key={activeTab} activeTab={activeTab} galleries={activeGalleries}/>
            </div>
        </main>
    );
}
