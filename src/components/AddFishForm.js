import React from 'react'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event =>{
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
        }
        this.props.addFish(fish);
        // refresh the form
        event.currentTarget.reset();
    }

  render () {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input ref={this.nameRef} type="text" placeholder="Name" name="name" />
        <input ref={this.priceRef} type="text" placeholder="Price" name="price" />
        <select ref={this.statusRef} type="text" placeholder="Status" name="status">
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out</option>
        </select>
        <textarea ref={this.descRef} placeholder="Description" name="desc"></textarea>
        <input ref={this.imageRef} type="text" placeholder="Image" name="image" />
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm
