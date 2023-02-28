import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { deletMeal } from "../../store/slices/mealSlice"


export default function Model({ show, onHide, item }) {
    const { myMenu } = useSelector(store => store.mealSlice)

    const dispatch = useDispatch()

    console.log(item)

    return (
        <>


            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>delete item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this item</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={dispatch(deletMeal(item._id))}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal></>

    )
}