import { useState } from 'react';
import ProductItem from '../../models/ProductItem';
import ProductList from '../../models/ProductList';
import Cart from '../../models/Cart';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './ProductItem.css';


const ProductItemTemplate = ({ sendDataToParent }: { sendDataToParent: (data: number) => void }) => {

    ProductList.load();


    const productList = ProductList.instance.list;
    const cart = Cart.instance;

    const [products, setProducts] = useState<ProductItem[]>(productList);
    const [displayCartQuantity, setDisplayCartQuantity] = useState<number>(0);


    const addToCartEventHandler = (product: ProductItem): void => {

        const prevProducts = products.map(p => {
            if (p.id == product.id) {
                if (p.quantity > 0)
                    p.quantity = p.quantity - 1
                else
                    p.quantity = 0
            }
            return p;
        }
        )

        setProducts(prevProducts);
        cart.addCartItem(product);
        let sum:number = 0;
        cart.list.forEach(
            element => (
                sum = sum + element.cart_quantity
            )
        )
        setDisplayCartQuantity(sum);
        sendDataToParent(displayCartQuantity);
    }

    return (
        <div className='template-container'>

            <Row xs={1} md={3} lg={3} className="g-6">
                {
                    products.map((item: ProductItem) => (
                        <Col style={{ marginBottom: '20px' }} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.image_url} alt={item.name} style={{ height: '350px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Row xs={1} md={2} lg={2}>
                                        <Col style={{ marginTop: '10px', marginBottom: '10px' }}>
                                            <Card.Text>
                                                $ {item.price}
                                            </Card.Text>
                                        </Col>
                                        <Col style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                                            <Card.Text>
                                                In stock : {item.quantity}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => addToCartEventHandler(item)}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>


        </div>


    )
}

export default ProductItemTemplate;