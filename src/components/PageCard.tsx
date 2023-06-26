import React from 'react'



type PageCardProps = {
    title: string;
    children: React.ReactNode;
};

const PageCard = ({ title, children }: PageCardProps) => {
    return (
        <div className='col-sm-10 mx-auto py-4 '>
            <div className='bg-white shadow p-3 px-5 rounded-4'>
                <h2 className='text-center'>{title}</h2>
                <hr />

                {children}
            </div>
        </div>
    );
};

export default PageCard;
