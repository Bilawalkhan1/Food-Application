import React, { useEffect } from 'react'
import axios from 'axios'
function Order() {
    useEffect(() => {
        const config = {
            headers: {
                'x-auth-token': sessionStorage.getItem('token'),
            }
        }
        axios.get('api/orderresturent', config).then((res) => {
            console.log(res.data)
        }).catch(err => {
        })
    }, [])
    return (
        <div class=" px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-11 col-lg-11 col-md-11 col-11 ">
                    <h3>Orders</h3>



                </div>
            </div>
        </div>
    )
}
export default Order
