import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({ review }) {
    const [open, setOpen] = useState(false);
    console.log(review);
    return (
        <div>
            <Button variant='dark'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Client Reviews
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    {
                        review?.map(item => (

                            <div className='mt-3 border rounded p-3'>
                                <h6>{item.name}</h6>
                                <p>{item.date}</p>
                                <p>{item.rating}</p>
                                <p>{item.comments}</p>
                            </div>
                        ))
                    }
                </div>
            </Collapse>

        </div>
    )
}

export default RestReview