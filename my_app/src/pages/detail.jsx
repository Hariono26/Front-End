import React from 'react'
import Axios from 'axios'
import NavigationBar from '../component/navigationBar';
import {
    Button,
    Form
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

// import { useLocation, } from 'react-router-dom'
// import { useEffect } from 'react'

// const DetailPage = () => {
//     const location = useLocation()

//     useEffect(() => {
//         Axios.get(`http://localhost:2000/products/${location.search.substring(1)}`)
//         .then(res => {
//             console.log(res.data)
//         })
//     }, [])

//     return (
//         <h1>This is Detail Page</h1>
//     )
// }


class DetailPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            qty: 0,
            toLogin: false,
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:2000/products/${document.location.search.substring(1)}`)
            .then(res => {
                this.setState({ product: res.data })
            })
    }

    onPlus = () => {
        this.setState({ qty: this.state.qty + 1 })
    }

    onMinus = () => {
        this.setState({ qty: this.state.qty - 1 })
    }

    onMasukKeranjang = () => {
        if (!this.props.username) {
            return this.setState({ toLogin: true })
        }
    }

    render() {
        const { product, qty, toLogin } = this.state

        if (toLogin) {
            return <Navigate to="/login" />
        }
        return (
            <div style={{ background: 'url(https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' }}>
                <NavigationBar />
                <div style={{ display: 'flex', height: '100vh', padding: '10vh', paddingTop: '20vh' }}>
                    <div style={styles.contImg}>
                        {(product.images ? product.images : []).map((item, index) => {
                            return (
                                <img style={styles.img} src={item} alt="" key={index} />
                            )
                        })}
                    </div>
                    <div style={styles.contDesc}>
                        <div style={{ color: 'white' }}>
                            <h1>{product.name ? product.name : ''}</h1>
                            <p> <strong style={{ color: 'orange' }}>Deskripsi:</strong> {product.description ? product.description : ''}</p>
                            <p> <strong style={{ color: 'orange' }}>Harga:</strong> IDR. {(product.price ? product.price : '').toLocaleString()}</p>
                            <p> <strong style={{ color: 'orange' }}>Stok Tersedia:</strong> {product.stock ? product.stock : ''}</p>
                            <p> <strong style={{ color: 'orange' }}>Jumlah Pembelian:</strong></p>
                            <div style={{ display: 'flex', justifyContent: "space-around", width: '30%' }}>
                                <Button onClick={this.onMinus} variant='danger' style={{ marginRight: '10px' }} disabled={qty < 1 ? true : false}>-</Button>
                                <Form.Control
                                    style={{ marginRight: '10px' }}
                                    type="text"
                                    value={qty}
                                    onChange={(e) => this.setState({ qty: +e.target.value })}
                                />
                                <Button onClick={this.onPlus} variant='success' disabled={qty === product.stock ? true : false} >+</Button>
                            </div>
                            <Button style={{ marginTop: '25px', width: '30%' }} variant='warning' onClick={this.onMasukKeranjang}>
                                <i className="fa-solid fa-cart-plus" style={{ marginRight: '10px' }}></i>
                                Masukkan Keranjang
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    contImg: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flexBasis: '40%',
        padding: '3%',
    },
    contDesc: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flexBasis: '60%',
        padding: '3%'
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'

    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}

export default connect(mapStateToProps)(DetailPage)