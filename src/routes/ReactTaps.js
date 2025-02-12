import React, { useState } from 'react';
import useTabs from '../hooks/useTabs';

const ReactTaps = () => {
    const content = [
        {
            tab: 'Section 1',
            content: "I'm the content of the Section 1"
        },
        {
            tab: 'Section 2',
            content: "I'm the content of the Section 2"
        },
        {
            tab: 'Section 3',
            content: "I'm the content of the Section 3"
        }
    ];

    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            <div>
                {content.map((section, index) => (
                    <button key={index} onClick={() => changeItem(index)}>
                        {section.tab}
                    </button>
                ))}
                <div>{currentItem.content}</div>
            </div>
        </div>
    );
};

export default ReactTaps;
