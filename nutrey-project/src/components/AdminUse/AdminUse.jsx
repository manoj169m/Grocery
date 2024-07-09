import React, { useState } from 'react';
import '../signin/Signin.css';
import '../AdminUse/Adminuse.css';
import axios from 'axios';

const AdminUse = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [datas, setDatas] = useState([]);
    const [selectedID, setSelectedID] = useState(null);
    const [popup, setPopup] = useState(true);
    const [updateName, setUpdateName] = useState('');
    const [updateImage, setUpdateImage] = useState('');
    const [updateType, setUpdateType] = useState('');
    const [updateQuantity, setUpdateQuantity] = useState('');
    const [updatePrice, setUpdatePrice] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        const productsData = {
            image,
            name,
            Ptype: type,
            quantity,
            rate: price
        };
        axios.post('http://localhost:3001/products/post', productsData)
            .then(res => {
                console.log(res.data);
                setDatas([...datas, res.data]);
                resetForm();
            })
            .catch(err => console.log(err));
    };

    const handleAll = () => {
        axios.get('http://localhost:3001/products/get')
            .then(res => {
                console.log(res.data);
                setDatas(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/products/delete/${id}`)
            .then(res => {
                console.log(res);
                const newdata = datas.filter((x) => x._id !== id);
                setDatas(newdata);
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (product) => {
        setSelectedID(product._id);
        setUpdateName(product.name);
        setUpdateImage(product.image);
        setUpdatePrice(product.rate);
        setUpdateQuantity(product.quantity);
        setUpdateType(product.Ptype);
        setPopup(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedData = {
            image: updateImage,
            name: updateName,
            Ptype: updateType,
            quantity: updateQuantity,
            rate: updatePrice
        };
        console.log('Updating product with id:', selectedID, 'Data:', updatedData);
        axios.put(`http://localhost:3001/products/update/${selectedID}`, updatedData)
            .then(res => {
                console.log('Product updated:', res.data);
                const newdata = datas.map((x) => x._id === selectedID ? res.data : x);
                setDatas(newdata);
                resetForm();
            })
            .catch(err => console.log(err));
    };

    const resetForm = () => {
        setName('');
        setImage('');
        setType('');
        setQuantity('');
        setPrice('');
        setSelectedID(null);
        setUpdateName('');
        setUpdateImage('');
        setUpdateType('');
        setUpdateQuantity('');
        setUpdatePrice('');
        setPopup(true);
    };

    return (
        <div className='admin-use'>
            {popup ?
                <div className='signup-main'>
                    <h1>"<span>Admin Use</span>"</h1>
                    <form onSubmit={handleAdd}>
                        <label>Product Name:</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            type="text"
                        />
                        <label>Product Image URL:</label>
                        <input
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                        <label>Select Category Type:</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="">Select a Type</option>
                            <option value="liquid">Liquid and Soap</option>
                            <option value="dhal">Dhal Items</option>
                            <option value="milk">Milk and Biscuit</option>
                            <option value="agarbatti">Agarbatti and Oils</option>
                        </select>
                        <label>Quantity:</label>
                        <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                        <label>Price:</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
                :
                <div className='signup-main'>
                    <h1>"Update Form"</h1>
                    <form onSubmit={handleUpdate}>
                        <label>Product Name:</label>
                        <input
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                            required
                            type="text"
                        />
                        <label>Product Image URL:</label>
                        <input
                            type="url"
                            value={updateImage}
                            onChange={(e) => setUpdateImage(e.target.value)}
                            required
                        />
                        <label>Select Category Type:</label>
                        <select
                            value={updateType}
                            onChange={(e) => setUpdateType(e.target.value)}
                            required
                        >
                            <option value="">Select a Type</option>
                            <option value="liquid">Liquid and Soap</option>
                            <option value="dhal">Dhal Items</option>
                            <option value="milk">Milk and Biscuie</option>
                            <option value="agarbatti">Agarbatti and Oils</option>
                        </select>
                        <label>Quantity:</label>
                        <input
                            type="text"
                            value={updateQuantity}
                            required
                            onChange={(e) => setUpdateQuantity(e.target.value)}
                        />
                        <label>Price:</label>
                        <input
                            type="number"
                            value={updatePrice}
                            required
                            onChange={(e) => setUpdatePrice(e.target.value)}
                        />
                        <button type="submit">Update</button>
                    </form>
                </div>
            }
            <div className='admin-table'>
                <div className='admin-table-head'><h1 onClick={handleAll}>Load Products</h1></div>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td><img src={data.image} alt="" /></td>
                                <td>{data.quantity}</td>
                                <td>{data.Ptype}</td>
                                <td>{data.rate}</td>
                                <td>
                                    <button onClick={() => handleDelete(data._id)}>Delete</button>
                                    <button onClick={() => handleEdit(data)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUse;
