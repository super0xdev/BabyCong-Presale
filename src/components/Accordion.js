
import React from 'react';
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const Accordion = (props) => {
    const [index, setIndex] = useState(0);
    return (
        <div className='relative'>
            {props.data.map((item, ind) => (
                <div>
                    <div onClick={() => setIndex(index == ind ? -1 : ind)} className="mt-4 flex items-center cursor-pointer justify-between w-full p-5 font-medium text-left bg-white text-gray-500 rounded-2xl">
                        <span className='acc-title'>{item.title}</span>
                        <HiArrowRight className={index === ind ? 'text-blue-400 text-4xl' : 'text-black text-4xl'} />
                    </div>
                    <div className={index === ind ? 'block' : 'hidden'}>
                        <div className="acc-body p-5 mt-2">
                            {item.body.split('\n').map((text, index) => (
                                <React.Fragment key={index}>
                                    {index !== 0 ? <><br /><br /></> : <></>}
                                    {text}
                                </React.Fragment>
                            ))}
                            {props.showReadMore && <span style={{ paddingLeft: '10px', color: '#00ACFF' }}>Read more</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordion;