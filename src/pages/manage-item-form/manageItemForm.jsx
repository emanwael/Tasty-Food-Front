import "./manageItemForm.css";

import React, { useState, useEffect } from "react";
import { addMenuItem, editMenuItem } from "../../store/slices/menuItemSlice";
import { useDispatch, useSelector } from "react-redux";

function ManageItemForm({ mode, item, restaurant }) {
  // set form values based on mode
  useEffect(() => {
    if (mode === "edit") {
      setFormState({
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        itemGroup: item.itemGroup,
        itemDescription: item.itemDescription,
        itemImage: item.itemImage,
        itemStatus: item.itemStatus,
        valid: true,
      });
      setImagePreview(item.itemImage);
    }
  }, []);

  // api connection setup
  const dispatch = useDispatch();
  const addItemOfForm = () => {
    let newItem = {
      meal_name: formState.itemName,
      description: formState.itemDescription,
      price: formState.itemPrice,
      meal_img: formState.itemImage,
      food_group: formState.itemGroup,
      is_available: formState.itemStatus,
      restaurant,
    };
    dispatch(addMenuItem(newItem));
  };
  const editItemOfForm = () => {
    let newItem = {
      _id: item._id,
      meal_name: formState.itemName,
      description: formState.itemDescription,
      price: formState.itemPrice,
      meal_img: formState.itemImage,
      food_group: formState.itemGroup,
      is_available: formState.itemStatus,
      restaurant,
    };
    dispatch(editMenuItem(newItem));
  };

  // form upate & validation
  let [formTouches, setFormTouches] = useState({
    itemName: false,
    itemPrice: false,
    itemGroup: false,
    itemDescription: false,
    formSubmitted: false,
  });

  let [formState, setFormState] = useState({
    itemName: "",
    itemPrice: "",
    itemGroup: "",
    itemDescription: "",
    itemImage:
      "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
    itemStatus: false,
    valid: false,
  });

  // update item availablity
  const updateItemStatus = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.checked,
    });
  };

  const updateFormState = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setFormTouches({ ...formTouches, [e.target.name]: true });
  };

  const validateFormData = () => {
    if (
      formState.itemName &&
      formState.itemGroup &&
      formState.itemDescription &&
      String(formState.itemPrice).match(/^[0-9]+$/)
    ) {
      setFormState({ ...formState, valid: true });
      setFormTouches({ ...formTouches, formSubmitted: true });

      if (mode === "add") addItemOfForm();
      else if (mode === "edit") editItemOfForm();
    } else {
      setFormState({ ...formState, valid: false });
      setFormTouches({ ...formTouches, formSubmitted: true });
    }
  };

  // image select & preview
  let [imagePreview, setImagePreview] = useState(
    "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif"
  );
  const preview_image = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="add-item-component">
      <div className="add-item-form">
        {mode === "add" && <h3>ADD ITEM FORM</h3>}
        {mode === "edit" && <h3>EDIT ITEM FORM</h3>}
        <form>
          <div className="form-row">
            <label className="row-label">Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              value={formState.itemName}
              onInput={updateFormState}
            ></input>
            {formTouches.itemName && !formState.itemName && (
              <p className="error-msg"> name can't be empty</p>
            )}
          </div>
          <div className="form-row">
            <label className="row-label">Price</label>
            <input
              type="text"
              name="itemPrice"
              placeholder="Item Price"
              value={formState.itemPrice}
              onInput={updateFormState}
            ></input>
            {formTouches.itemPrice &&
              !String(formState.itemPrice).match(/^[0-9]+$/) && (
                <p className="error-msg">
                  price can't be empty and must be numbers only
                </p>
              )}
          </div>
          <div className="form-row">
            <label className="row-label">Group</label>
            <input
              list="itemGroup"
              placeholder="Item Group"
              name="itemGroup"
              value={formState.itemGroup}
              onInput={updateFormState}
            ></input>
            <datalist id="itemGroup">
              <option value="burger" />
              <option value="pizza" />
              <option value="pasta" />
            </datalist>
            {formTouches.itemGroup && !formState.itemGroup && (
              <p className="error-msg"> group can't be empty</p>
            )}
          </div>
          <div className="form-row">
            <label className="row-label">Description</label>
            <textarea
              name="itemDescription"
              placeholder="Item Description"
              value={formState.itemDescription}
              onInput={updateFormState}
            ></textarea>
            {formTouches.itemDescription && !formState.itemDescription && (
              <p className="error-msg"> description can't be empty</p>
            )}
          </div>
          <div className="form-row">
            <label className="row-label">Image</label>
            <input
              type="file"
              name="itemImage"
              onChange={preview_image}
            ></input>
            {/* <div className="file-upload-select">
              <div className="file-select-button">Choose File</div>
              <div className="file-select-name">No file chosen </div>
              <input
                type="file"
                name="itemImage"
                id="itemImage"
                onChange={preview_image}
              />
            </div> */}
          </div>
        </form>
      </div>
      <div className="item-view">
        <h3>ITEM</h3>
        <div className="image-preview">
          <img src={imagePreview} name="ItemImagePreview" alt="" />
        </div>
        <div className="form-row">
          <label className="status-label">Status Available</label>
          <input
            type="checkbox"
            name="itemStatus"
            id="statusSwitch"
            className="statusSwitch"
            checked={formState.itemStatus}
            onChange={updateItemStatus}
          />
          <label htmlFor="statusSwitch" className="statusToggle">
            Toggle
          </label>
        </div>
        <div className="">
          {mode === "add" && (
            <button className="add-item-button" onClick={validateFormData}>
              Add Menu Item
            </button>
          )}
          {mode === "edit" && (
            <button className="add-item-button" onClick={validateFormData}>
              Update Menu Item
            </button>
          )}
          {formTouches.formSubmitted && !formState.valid && (
            <p className="error-msg"> please fill all the fields</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageItemForm;

///////////////////////////////////
//////!!! how to run
//////!!! run in edit mode/////
// {
//   //   <ManageItemForm
//   //   mode="edit"
//   //   item={{
//   //     _id: "item_id as a string",
//   //     itemName: "old name",
//   //     itemDescription: "old desctiption",
//   //     itemGroup: "old Group",
//   //     itemPrice: 50,
//   //     itemImage:
//   //       "http://metropolitanhost.com/themes/themeforest/react/costic/assets/img/costic/add-product-1.jpg",
//   //     itemStatus: true,
//   //   }}
//   //   restaurant={"restaurant_id as a string"}
//   // ></ManageItemForm>
// }
// //////!!! run in add mode/////
// {
//   /* <ManageItemForm
//       mode="add"
//       restaurant={"restaurant_id as a string"}
//     ></ManageItemForm> */
// }
// /////////////////////////////////////
